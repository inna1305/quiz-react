//const renderNextButton = (step, questionObj) => {
//     const button = createElement('button', { class: 'button', id: 'next' }, 'Вперёд');
//     const arrowNext = createElement('div', {}, '>');
//     button.append(arrowNext);
//     button.disabled = !checkCurrentQuestion(questionObj.id);
//
//     button.addEventListener('click', (event) => {
//         event.preventDefault();
//
//         if (questionObj.answerType === 'select') {
//             handleSelectAnswers(questionObj);
//         }
//         if (questionObj.answerType === 'radio') {
//             const formContainer = document.querySelector('.form');
//             doNextStep(formContainer);
//         }
//     });
//     return button;
// }
import React, { createElement } from "react";
import { ReactElement } from "react";
import { ButtonProps } from "types/types";


const Button = (props: ButtonProps): ReactElement => {
  return (<button className="button" id={props.type} disabled={!props.isThereCurrentValue} onClick={handleButton}>
    <div>{props.type}</div>
  </button>);
}

const handleButton = () => {
  console.log('click');
}

export default Button;