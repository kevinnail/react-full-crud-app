import { useEffect, useState } from 'react';
import { getComments } from '../services/comments.js';

export function useComments(postId) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchComments = async () => {
      try {
        const data = await getComments(postId);
        if (error) throw new Error(error);
        setComments(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchComments();
  }, [postId, error]);

  return { comments, setComments, loading, setLoading, error, setError };
}
