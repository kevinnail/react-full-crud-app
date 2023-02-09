import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { usePosts } from '../../hooks/usePosts.js';
import './Posts.css';
export default function Posts() {
  const { user } = useUser();
  const { posts } = usePosts();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
