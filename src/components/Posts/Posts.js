import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { usePosts } from '../../hooks/usePosts.js';

export default function Posts() {
  const { user } = useUser();
  const { posts } = usePosts();
  console.log('posts', posts);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div>
      {posts.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </div>
  );
}
