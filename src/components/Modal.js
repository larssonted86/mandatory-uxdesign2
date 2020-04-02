import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Focustrap from 'focus-trap-react';
import { Redirect } from 'react-router-dom';

import '../styles/css/Modal.css';

export class Modal extends Component {
  closeModal = () => {
    return <Redirect to='/' />;
  };
  render() {
    console.log(this.props.results);
    return (
      <Focustrap>
        <div className='modal__container'>
          <h2> Your Score Is!</h2>
          <h3>{this.props.results}</h3>
          <button
            className='modal__container--button'
            onClick={this.props.onClick}>
            RESET QUIZ
          </button>
          <Link to='/' tabIndex='-1'>
            <button className='modal__container--button'>CLOSE</button>
          </Link>
        </div>
      </Focustrap>
    );
  }
}

export default Modal;
