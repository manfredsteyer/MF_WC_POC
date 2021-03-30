import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, ComponentRef, ContentChild, Injector, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit, OnDestroy {

  @Input() remoteName: string | undefined;
  @Input() exposedModule: string | undefined;
  @Input() componentName = '';

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef | undefined;

  compRef: ComponentRef<unknown> | undefined;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver) { }

  ngOnDestroy(): void {
    this.compRef?.destroy();
  }

  ngOnInit(): void {

    if (!this.remoteName || !this.exposedModule) {
      return;
    }

    loadRemoteModule({
      remoteName: this.remoteName,
      exposedModule: this.exposedModule
    }).then(m => {
      const Comp = m[this.componentName];

      if (!this.container) {
        return;
      }

      const factory = this.cfr.resolveComponentFactory(Comp);
      this.compRef = this.container.createComponent(factory, undefined, this.injector);
      // const compInstance = compRef.instance;
      // compInstance.name = 'test';
      // compInstance.onChange = ...
    });
  }

}
