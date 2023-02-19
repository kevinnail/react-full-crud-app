import { client, checkError } from './client';

export async function getPosts() {
  const resp = await client.from('posts').select('*').order('created_at', { ascending: false });
  return checkError(resp);
}

export async function createPost(title, description) {
  const resp = await client.from('posts').insert({ title: title, description });
  return checkError(resp);
}

export async function updatePost(id, title, description) {
  const resp = await client.from('posts').update({ title, description }).match({ id });
  return checkError(resp);
}

export async function getPostDetail(id) {
  const resp = await client.from('posts').select('*').match({ id }).single();
  return checkError(resp);
}

export async function deletePost(id) {
  const resp = await client.from('posts').delete().match({ id });
  return checkError(resp);
}
