import { client, checkError } from './client';

export async function getPosts() {
  const resp = await client.from('posts').select('*');
  return checkError(resp);
}

export async function createPost(title, description) {
  const resp = await client.from('posts').insert({ title: title, description });
  return checkError(resp);
}
