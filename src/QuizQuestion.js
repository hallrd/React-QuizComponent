import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {incorrectAnswer: false};
  }

  handleClick(button_text) {

    (this.incorrectAnswer) ? this.incorrectAnswer = false : this.incorrectAnswer = true;

    if(button_text === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
    }
  }

    render() {
        return (
            <main>
            <section>
              <p>
              {this.props.quiz_question.instruction_text}
              </p>
            </section>
            <section className="buttons">
              <ul>
                {this.props.quiz_question.answer_options.map( (ao, index) => (
                 <QuizQuestionButton key = {index} button_text = {ao} clickHandler={this.handleClick.bind(this)}/>
                ))}
              </ul>
            </section>
            {this.state.incorrectAnswer 
              ? <p> Sorry, that's not right. </p>
              : null
            }
          </main>
        )
    }
}

export default QuizQuestion
