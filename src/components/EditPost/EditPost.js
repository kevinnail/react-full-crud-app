import { Redirect, useHistory, useParams } from 'react-router-dom';
import { updatePost } from '../../services/posts';
import PostForm from '../PostForm/PostForm.js';
import { usePost } from '../../hooks/usePost.js';
import { useUser } from '../../context/UserContext.js';

export default function EditPost() {
  const { id } = useParams();
  const history = useHistory();
  const { postDetail, loading, setLoading, error, setError } = usePost(id);
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  const handleSubmit = async (title, description) => {
    setLoading(true);

    try {
      await updatePost(postDetail.id, title, description);
      history.push('/posts');
    } catch (e) {
      setError(e.message);
    }
  };

  return <PostForm {...postDetail} submitHandler={handleSubmit} />;
}
