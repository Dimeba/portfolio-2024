
import { createClient, EntryCollection, Entry, EntrySkeletonType } from 'contentful';

const client = createClient({
  space: process.env.space || '',
  accessToken: process.env.accessToken || '',
});

export async function getEntries<T extends EntrySkeletonType>(
  query: object
): Promise<EntryCollection<T>> {
  const content = await client.getEntries<T>(query);
  return content;
}

export async function getEntry<T extends EntrySkeletonType>(id: string): Promise<Entry<T>> {
  const item = await client.getEntry<T>(id);
  return item;
}
