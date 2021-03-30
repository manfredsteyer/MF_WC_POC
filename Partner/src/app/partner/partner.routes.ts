import { Routes } from '@angular/router';
import { PartnerAnlegenComponent } from './partner-anlegen/partner-anlegen.component';
import { PartnerInfoComponent } from './partner-info/partner-info.component';

export const PARTNER_ROUTES: Routes = [
    {
        path: 'anlegen',
        component: PartnerAnlegenComponent
    },
    {
        path: 'info',
        component: PartnerInfoComponent
    }
];
