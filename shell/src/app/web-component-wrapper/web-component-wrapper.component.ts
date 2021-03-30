import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-web-component-wrapper',
  templateUrl: './web-component-wrapper.component.html',
  styleUrls: ['./web-component-wrapper.component.css']
})
export class WebComponentWrapperComponent implements OnInit {

  @Input() remoteName: string | undefined;
  @Input() exposedModule: string | undefined;
  @Input() elementName = '';

  @ViewChild('container', { static: true })
  container: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
    if (!this.remoteName || !this.exposedModule) {
      return;
    }

    loadRemoteModule({
      remoteName: this.remoteName,
      exposedModule: this.exposedModule
    }).then(m => {

      if (!this.container) {
        return;
      }

      console.debug('container', this.container);
      const comp = document.createElement(this.elementName);
      this.container.nativeElement.appendChild(comp);

    });
  }

}
