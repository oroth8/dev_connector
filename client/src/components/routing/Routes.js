import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from '../layout/Alert'
import Dashboard from '../dashboard/Dashboard'
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile'
import Profiles from '../profiles/Profiles'
import Profile from '../profile/Profile'
import AddExp from '../profile-forms/AddExp';
import AddEdu from '../profile-forms/AddEdu'
import Posts from '../posts/Posts'
import Post from '../post/Post';


const Routes = () => {
    return (
        <section className="container">
            <Alert />
            <Switch>
                <Route exact path="/register"
                    component={Register} />
                <Route exact path="/login"
                    component={Login} />
                <Route exact path='/profiles' component={Profiles} />
                <Route exact path='/profile/:id' component={Profile} />
                <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                <PrivateRoute exact path="/dashboard"
                    component={Dashboard} />
                <PrivateRoute exact path='/edit-profile' component={EditProfile} />
                <PrivateRoute te exact path='/add-experience' component={AddExp} />
                <PrivateRoute exact path='/add-education' component={AddEdu} />
                <PrivateRoute exact path='/posts' component={Posts} />
                <PrivateRoute exact path='/posts/:id' component={Post} />
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes
