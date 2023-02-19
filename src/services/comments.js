import { client, checkError } from './client';

export async function getComments(postId) {
  const resp = await client
    .from('comments')
    .select('*')
    .eq('post_id', postId)
    .order('created_at', { ascending: false });
  return checkError(resp);
}
