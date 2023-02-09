import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function PostCard({ title, description, user_id, id }) {
  const { user } = useUser();
  const owner = user.id === user_id;
  return (
    <div className="post" key={id}>
      <h1>{title}</h1>
      <p>{description}</p>
      {owner && (
        <p>
          <Link to={`/posts/edit/${id}`}>Edit </Link>
        </p>
      )}
    </div>
  );
}
