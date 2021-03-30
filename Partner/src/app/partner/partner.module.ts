import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerAnlegenComponent } from './partner-anlegen/partner-anlegen.component';
import { PartnerInfoComponent } from './partner-info/partner-info.component';
import { RouterModule } from '@angular/router';
import { PARTNER_ROUTES } from './partner.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PARTNER_ROUTES)
  ],
  declarations: [
    PartnerAnlegenComponent,
    PartnerInfoComponent,
  ],
})
export class PartnerModule { }
