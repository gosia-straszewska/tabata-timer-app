import React from 'react';
import './App.css';
import {Welcome} from './components/Welcome.jsx';
import {Basic} from './components/Basic/Basic.jsx';
import {Custom} from './components/Custom/Custom.jsx';
import {HashRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
  <HashRouter>
    <>
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/basic' component={Basic} />
      <Route path='/custom' component={Custom} />
      </Switch>
    </>
  </HashRouter>
  );
}

export default App;