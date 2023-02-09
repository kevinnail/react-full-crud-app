import Auth from './components/Auth/Auth.js';
// import Posts from './components/Posts/Posts.js';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
// import { useUser } from './context/UserContext.js';
import Header from './components/Header/Header.js';
import Posts from './components/Posts/Posts.js';
import NewPost from './components/NewPost/NewPost.js';
import EditPost from './components/EditPost/EditPost.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/auth/:type" component={Auth} />
        <Route path="/posts/edit/:id" component={EditPost} />
        <Route path="/posts/new" component={NewPost} />
        <Route path="/posts" component={Posts} />
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
