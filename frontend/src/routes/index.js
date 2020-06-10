import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/Sign';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Library from '../pages/Libary';
import PlaylisDetails from '../pages/PlaylisDetails';
import Artist from '../pages/Artist';
import AlbumDetails from '../pages/AlbumDetails';

import Dashboard from '../pages/Dashboard';

import ArtistEdit from '../pages/Dashboard/components/Artists/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/home" component={Home} isPrivite />
      <Route path="/your-library" component={Library} isPrivite />
      <Route path="/playlist/:id" component={PlaylisDetails} isPrivite />
      <Route path="/artist/:id" exact component={Artist} isPrivite />
      <Route path="/album/:id" component={AlbumDetails} isPrivite />

      <Route path="/dashboard" component={Dashboard} isPrivite isAdmin />
      <Route path="/artist/edit/:id" component={ArtistEdit} isPrivite isAdmin />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
