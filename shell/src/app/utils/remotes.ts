export type Remotes = Remote[];
export type Remote = {
    remoteEntry: string;
    remoteName: string;
    routes: RemoteRoute[];
    links: string[];
};
export type RemoteRoute = {
    path: string;
    exposedModule: string;
    angularModule: string;
};

export function loadRemotes(): Promise<Remotes> {
    return fetch('assets/remotes.json')
                .then(resp => resp.json());
}
