// import './bootstrap';

import { loadRemoteEntry } from '@angular-architects/module-federation';

// fetch('/microfrontends.json')

Promise.all([
	loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'Partner'),
	loadRemoteEntry('http://localhost:4000/remoteEntry.js', 'MarktVersicherung')
])
.catch(err => console.error(err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));
