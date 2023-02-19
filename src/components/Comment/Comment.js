import React, { useState } from 'react';
import { useUser } from '../../context/UserContext.js';
import { createComment } from '../../services/comments.js';
import './Comment.css';

export default function Comment({
  loading,
  prevComments, // use prevComments instead of comments
  setComments,
  postId,
  setLoadingComments,
}) {
  const [content, setContent] = useState('');
  const [errorComments, setErrorComments] = useState(null);
  const { user } = useUser();
  const generateCommentKey = (content, userId, timestamp) => {
    return `${content}-${userId}-${timestamp}`;
  };

  const handleComment = async (e) => {
    e.preventDefault();
    const content = e.target[0].value;
    const timestamp = Date.now();
    const resp = await createComment(content, postId, user.id);

    if (resp.error) {
      setErrorComments(resp.error);
    } else {
      const newComment = { ...resp, key: generateCommentKey(content, user.id, timestamp) };
      setComments([...prevComments, newComment]);
    }

    setLoadingComments(false);
    setContent('');
  };

  return (
    <form onSubmit={handleComment}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a comment..."
      />
      <button type="submit">Submit</button>

      <div className="comment-container">
        {loading && <p>Loading comments...</p>}
        {errorComments && <p>Error loading comments: {errorComments}</p>}
        {prevComments.length > 0 && (
          <ul className="comment-list">
            {prevComments.map((comment) => (
              <li className="comment" key={`${comment.id}-${Date.now()}`}>
                <div>{comment.content}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}
