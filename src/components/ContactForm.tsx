import React from "react";
import { ReactElement } from "react";

const ContactForm = (): ReactElement => {
  return (
    <>test</>
  )
}

export default ContactForm;







//const getContactForm = () => {
//     const currentStep = Number(localStorage.getItem('step'));
//
//     const container = createElement('div', {class: 'form__container'});
//
//     const titleCounterContainer = createElement('div', {class: 'form__title-counter-container'});
//     const title = createElement('h2', {class: 'form__title'}, 'Ваша подборка готова! 🥳 Куда нам отправить её?');
//     const counter = createElement('div', {class: 'form__counter'}, `Шаг ${currentStep}/${questionsData.length + 1}`);
//     titleCounterContainer.append(title, counter);
//
//     const fieldset = createElement('fieldset', {class: 'fieldset'});
//
//     const name = createElement('input', {
//         name: 'name',
//         type: 'text',
//         placeholder: 'Как вас зовут?',
//         class: 'fieldset__input-text',
//         id: 'name',
//         required: '',
//     });
//
//     const number = createElement('input', {
//         name: 'phone',
//         type: 'text',
//         placeholder: 'Номер телефона',
//         pattern: '^\\+?\\d{0,20}(\\(\\d{1,20}\\))?$',
//         class: 'fieldset__input-text',
//         id: 'number',
//         required: '',
//     });
//
//     const email = createElement('input', {
//         name: 'email',
//         type: 'email',
//         placeholder: 'E-mail',
//         class: 'fieldset__input-text',
//         id: 'email',
//         required: '',
//     })
//
//     fieldset.append(name, number, email);
//
//     const button = createElement('button', {class: 'button', type: 'submit'}, 'Отправить');
//     button.addEventListener('click', (event) => {
//             const values = [name.value, number.value, email.value];
//             const allInputsFilled = values.every(value => value.length > 0);
//             if (allInputsFilled) {
//                 event.preventDefault();
//                 recordAnswersToLS();
//                 showLoader();
//                 setTimeout(fetchData, 1000);
//             }
//         }
//     );
//
//     container.append(titleCounterContainer, fieldset, button);
//     return container;
// }
