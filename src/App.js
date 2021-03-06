import React from 'react';
import Login from './components/LoginForm';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/RegisterForm';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
