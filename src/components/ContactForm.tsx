import React, { ReactElement, useState } from "react";
import { questionsData } from "@base/questions-data";
import Button from "@components/buttons/Button";
import { ButtonValue } from "types/types";

const ContactForm = (): ReactElement => {
  const [contacts, setContact] = useState(['']);
  const lastStep = questionsData.length + 1;
  return (
    <div className="form">
    <div className="form__container">
      <div className="form__title-counter-container">
        <h2 className="form__title">Ваша подборка готова! 🥳 Куда нам отправить её?</h2>
        <div className="form__counter">Шаг {lastStep}/{lastStep}</div>
      </div>
      <fieldset className="fieldset">
        {/*todo обработчики для инпутов*/}
        <input name="name" type="text" className="fieldset__input-text" placeholder="Как вас зовут?" id="name" required />
        <input name="phone" type="text" className="fieldset__input-text" pattern="^\\+?\\d{0,20}(\\(\\d{1,20}\\))?$" placeholder="Номер телефона" id="number" required/>
        <input name="email" type="email" className="fieldset__input-text" placeholder="E-mail" id="email" required/>
      </fieldset>
      <Button innerText={ButtonValue.final} buttonHandler={() => {
      }} isActive={true} />
    </div>
    </div>
  )
}

export default ContactForm;

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
