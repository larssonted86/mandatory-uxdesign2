import React, { Component } from 'react';
import '../styles/css/Mainscreen.css';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../styles/images/homeIcon.svg';

export class Mainscreen extends Component {
  render() {
    return (
      <div className='mainscreen__container'>
        <button className='mainscreen__container--navbutton'>
          <Link to='/'>
            <HomeIcon className='mainscreen__container--navbutton--icon' />
          </Link>
        </button>
        <h1 className='mainscreen__container--h1'> Quizzer App!</h1>

        <h3 className='mainscreen__container--h1'>
          To start the Quiz please press the button.
        </h3>
        <button className='mainscreen__container--button'>
          <Link to='/quiz'>GET QUIZZIN!</Link>
        </button>
      </div>
    );
  }
}

export default Mainscreen;
