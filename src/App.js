import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import './App.css';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'
import Resume from './pages/Resume';

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={About} exact path='/about' />
          <Route component={Resume} exact path='/resume' />
          <Route component={Portfolio} exact path='/portfolio' />
          <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
      </Router>
  );
}

export default App;
