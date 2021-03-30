import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'partner',
        loadChildren: () => loadRemoteModule({
            // remoteEntry: 'http://localhost:3000/remoteEntry.js',
            remoteName: 'Partner',
            exposedModule: './PartnerModule'
        }).then(m => m.PartnerModule)
        // () => import('Partner/PartnerModule')
        //                         .then(m => m.PartnerModule)
    }
];
