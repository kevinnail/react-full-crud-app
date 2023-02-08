import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();

  const handleClick = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <header>
      <h2>Bulletin Board</h2>
      {user && (
        <div className="">
          <p>
            We are selling this email: <span> {user.email}</span> to everyone! Oh wait no, sorry
            please disregard I must have mistyped that your email is totally safe with us, we are
            big on privacy. Welcome!
          </p>
          <button onClick={handleClick}>Sign Out</button>
          <Link to="/posts/new">New Post</Link>
        </div>
      )}
    </header>
  );
}
