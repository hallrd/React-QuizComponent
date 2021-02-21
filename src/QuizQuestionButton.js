import React, { Component, createContext } from 'react'

class  QuizQuestionButton extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
        <li>
            <button>
                {this.props.button_text}
            </button>
        </li> 
        );
    }
}
 
export default QuizQuestionButton;