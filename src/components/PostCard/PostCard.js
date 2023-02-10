import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './PostCard.css';

export default function PostCard({ title, description, user_id, id }) {
  const { user } = useUser();
  const owner = user.id === user_id;
  return (
    <div className="post" key={id}>
      <h1>{title}</h1>
      <p>{description}</p>
      {owner && (
        <p className="button-container">
          <span></span>
          <Link className="edit-link" to={`/posts/edit/${id}`}>
            <img src="/edit.png" className="edit-button" />{' '}
          </Link>
          <Link className="edit-link" to={`/posts/edit/${id}`}>
            <img src="/delete.png" className="delete-button" />{' '}
          </Link>
        </p>
      )}
    </div>
  );
}
