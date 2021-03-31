import { loadRemoteModule } from '@angular-architects/module-federation';
import { RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemotes, Remote, RemoteRoute } from './utils/remotes';

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
    // {
    //     path: 'partner',
    //     loadChildren: () => loadRemoteModule({
    //         // remoteEntry: 'http://localhost:3000/remoteEntry.js',
    //         remoteName: 'Partner',
    //         exposedModule: './PartnerModule'
    //     }).then(m => m.PartnerModule)
    //     // () => import('Partner/PartnerModule')
    //     //                         .then(m => m.PartnerModule)
    // }
];

type RouteWithRemote = RemoteRoute & {
    remote: Remote
};

export async function createRoutes(): Promise<Routes> {

    const remotes = await loadRemotes();
    const remoteRoutes = remotes
        .filter(r => !!r.routes)
        .reduce( (acc, remote) => ([...acc, ...remote.routes.map(route => ({...route, remote}))]), 
            [] as RouteWithRemote[]);

    const routes = remoteRoutes.map(r => ({
        path: r.path,
        loadChildren: () => loadRemoteModule({
            remoteName: r.remote.remoteName,
            exposedModule: r.exposedModule
        }).then(m => m[r.angularModule])
    }));

    return [...APP_ROUTES, ...routes];


}