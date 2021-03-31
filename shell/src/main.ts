import { loadRemoteEntry } from '@angular-architects/module-federation';
import { loadRemotes } from './app/utils/remotes';

loadRemotes()
	.then(remotes => remotes.map(r => loadRemoteEntry(r.remoteEntry, r.remoteName)))
	.then(promises => Promise.all(promises))
	.catch(err => console.error(err))
	.then(() => import('./bootstrap'))
	.catch(err => console.error(err));
