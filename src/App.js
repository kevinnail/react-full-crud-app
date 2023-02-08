import Auth from './components/Auth/Auth.js';
import Posts from './components/Posts/Posts.js';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/auth/:type" component={Auth} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
