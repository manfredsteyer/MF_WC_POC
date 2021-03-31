import { loadRemotes } from './remotes';

export async function createLinks() {
    const remotes = await loadRemotes();
    const links = remotes
        .filter(r => !!r.links)
        .reduce( (acc, r) => [...acc, ...r.links], [] as string[]);
    return links;
}
