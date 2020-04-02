import React, { Component } from 'react';
import '../styles/css/Cards.css';

export class Cards extends Component {
  renderCards = () =>
    this.props.quizData.map(question => {
      let index = this.props.quizData.indexOf(question);

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

      const awnserArray = [
        question.correct_answer,
        question.incorrect_answers[0],
        question.incorrect_answers[1],
        question.incorrect_answers[2]
      ];

      let sortedArray = [...awnserArray];

      sortedArray.sort();

      return (
        <div className='card__container' key={question.question}>
          <div className='card__container--top'>
            <h2>
              {question.question.replace(
                /&#?\w+;/g,
                match => corrections[match]
              )}
            </h2>
          </div>
          <div className='card__container--bottom'>
            <div className='card__container--bottom--coice'>
              <input
                value={sortedArray[0]}
                name={index}
                type='radio'
                className='radio__button'
                id={sortedArray[0] + index}></input>

              <label htmlFor={sortedArray[0] + index}>
                {sortedArray[0].replace(
                  /&#?\w+;/g,
                  match => corrections[match]
                )}
              </label>
            </div>
            <div className='card__container--bottom--coice'>
              <input
                value={sortedArray[1]}
                name={index}
                type='radio'
                className='radio__button'
                id={sortedArray[1] + index}></input>
              <label htmlFor={sortedArray[1] + index}>
                {sortedArray[1].replace(
                  /&#?\w+;/g,
                  match => corrections[match]
                )}
              </label>
            </div>
            <div className='card__container--bottom--coice'>
              <input
                value={sortedArray[2]}
                name={index}
                type='radio'
                className='radio__button'
                id={sortedArray[2] + index}></input>
              <label htmlFor={sortedArray[2] + index}>
                {sortedArray[2].replace(
                  /&#?\w+;/g,
                  match => corrections[match]
                )}
              </label>
            </div>
            <div className='card__container--bottom--coice'>
              <input
                value={sortedArray[3] + index}
                name={index}
                type='radio'
                className='radio__button'
                id={sortedArray[3] + index}></input>
              <label htmlFor={sortedArray[3] + index}>
                {sortedArray[3].replace(
                  /&#?\w+;/g,
                  match => corrections[match]
                )}
              </label>
            </div>
          </div>
        </div>
      );
    });
  render() {
    return <div>{this.renderCards()}</div>;
  }
}

export default Cards;
