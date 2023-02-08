import { client, checkError } from './client';

export async function getPosts() {
  const resp = await client.from('posts').select('*');
  console.log(' resp from services', resp);

  return checkError(resp);
}
