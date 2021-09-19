import React ,{Profiler, useEffect}from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Layout from './hocs/Layout';
import PrivateRoute from './hocs/PrivateRoute';

import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Signup';
import Dashboard from './containers/Profile/Dashboard';
import Aboutus from './containers/About';
import Contact from './containers/Contact';
import Post from './containers/Post';
import CreatePost from './containers/CreatePost';
import PostDetails from './containers/PostDetails';
import CreateProfile from './containers/Profile/CreateProfile';
import EditProfile from './containers/Profile/EditProfile';

import { Provider } from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>
    <Router>
      <Layout >
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={Aboutus} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/post' component={Post} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route exact path='/signup' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/create/post' component={CreatePost} />
        <Route exact path='/details/:id' component={PostDetails} />
        <Route exact path='/profile/' component={CreateProfile} />
        <Route exact path='/edit/profile/' component={EditProfile} />
        {/* <Route exact path='/edit/:id' component={EditPost} /> */}
      </Layout>
    </Router>
    </Provider>
  );
}

export default App;
