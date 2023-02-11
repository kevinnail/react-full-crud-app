import { useHistory } from 'react-router-dom';
import { createPost } from '../../services/posts.js';
import PostForm from '../PostForm/PostForm.js';
import { useUser } from '../../context/UserContext.js';
import { Redirect } from 'react-router-dom';

export default function NewPost() {
  const history = useHistory();
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  const handleSubmit = async (title, description) => {
    // call service to add new form
    try {
      await createPost(title, description);
      history.push('/posts');
    } catch (e) {
      console.error(e.message);
    }
    // navigate back to posts
  };
  return <PostForm submitHandler={handleSubmit} />;
}
