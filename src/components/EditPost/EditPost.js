import { useHistory, useParams } from 'react-router-dom';
import { updatePost } from '../../services/posts';
import PostForm from '../PostForm/PostForm.js';
import { usePosts } from '../../hooks/usePosts.js';

export default function EditPost() {
  const { id } = useParams();
  const history = useHistory();
  const { posts, loading, setLoading, error, setError } = usePosts();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  const handleSubmit = async (title, description) => {
    setLoading(true);

    try {
      await updatePost(id, title, description);
      history.push('/posts');
    } catch (e) {
      setError(e.message);
    }
  };

  return <PostForm {...posts} submitHandler={handleSubmit} />;
}
