import React from 'react';
import './App.css';
import Mainscreen from './components/Mainscreen';
import Quizscreen from './components/Quizscreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app__container'>
        <Route exact path='/'>
          <Mainscreen />
        </Route>
        <Route exact path='/quiz'>
          <Quizscreen />
        </Route>
      </div>
    </Router>
  );
}

export default App;
