import React, { Component } from 'react';
import '../styles/css/Quizscreen.css';
import Axios from 'axios';
import Cards from './Cards';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../styles/images/homeIcon.svg';

export class Quizscreen extends Component {
  state = {
    quizData: [],
    correctChoices: [],
    userChoices: [],
    results: null,
    modal: false
  };

  getQuiz = () => {
    Axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
      .then(response => {
        const corrections = {
          '&#039;': "'",
          '&quot;': '"',
          '&ldquo;': '"',
          '&rdquo;': '"',
          '&rsquo;': "'",
          '&lrm;': '',
          '&ntilde;': 'ñ',
          '&eacute;': 'é',
          '&amp;': '&',
          '&uuml;': 'ü'
        };

        let correct = [];
        for (let i = 0; i < response.data.results.length; i += 1) {
          correct.push(
            response.data.results[i].correct_answer.replace(
              /&#?\w+;/g,
              match => corrections[match]
            )
          );
        }
        this.setState({
          correctChoices: correct
        });
        this.setState({
          quizData: response.data.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  closeModal = () => {
    this.setState({
      results: null
    });
    this.getQuiz();
  };

  setResults = () => {
    let inputList = document.getElementsByTagName('input');
    let tempArray = [];
    for (let i = 0; i < inputList.length; i++) {
      if ((inputList[i].type = 'radio')) {
        if (inputList[i].checked) {
          tempArray.push(inputList[i].value);
        }
      }
      this.setState(
        {
          userChoices: tempArray
        },
        () => {
          let correct = 0;
          for (let i = 0; i < this.state.correctChoices.length; i++) {
            if (this.state.userChoices[i] === this.state.correctChoices[i]) {
              correct++;
            }
          }
          this.setState({
            results: correct,
            modal: true
          });
        }
      );
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.setResults();
  };
  componentDidMount() {
    this.getQuiz();
  }
  render() {
    console.log(this.state);
    return (
      <div className='quizscreen__container'>
        <button className='quizscreen__container--navbutton'>
          <Link to='/'>
            <HomeIcon className='quizscreen__container--navbutton--icon' />
          </Link>
        </button>

        <form className='quizscreen__form' onSubmit={this.onSubmit}>
          <Cards quizData={this.state.quizData} />
          <button className='form--submitbutton'>END QUIZ</button>
        </form>
        {this.state.results ? (
          <Modal results={this.state.results} onClick={this.closeModal} />
        ) : null}
      </div>
    );
  }
}

export default Quizscreen;
