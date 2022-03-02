import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import { Main, Listen, About, Favourites, Jokes } from './pages';
import { Header, Footer } from './layout';

function App() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/"><Main /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/favourite"><Favourites /></Route>
          <Route path="/listen"><Listen /></Route>
          <Route exact path="/jokes" render= {() => <h1> Welcome to da jokes brooooo!</h1>} />
        </Switch>
        <Footer />
      </>
    );
  }
  
  export default App;
