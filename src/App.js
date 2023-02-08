import Auth from './components/Auth/Auth.js';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route exact path="/" />
        {user && <Redirect to="/posts" />}
        {!user && <Redirect to="/auth/sign-in" />}
      </Switch>
    </div>
  );
}

export default App;
