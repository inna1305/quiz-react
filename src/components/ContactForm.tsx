import React, { ReactElement, useState } from "react";
import { questionsData } from "@base/questions-data";
import Button from "@components/buttons/Button";
import { ButtonValue, questionNames } from "types/types";

const ContactForm = (): ReactElement => {
  const [contacts, setContact] = useState<Map<questionNames, string | null>>(new Map([
    [questionNames.name, null],
    [questionNames.phone, null],
    [questionNames.email, null]
  ]));

  const handleChange = (name: questionNames, newValue: string) => {
    setContact(contacts.set(name, newValue));
  };

  const lastStep = questionsData.length + 1;


  return (
    <div className="form">
      <div className="form__container">
        <div className="form__title-counter-container">
          <h2 className="form__title">Ваша подборка готова! 🥳 Куда нам отправить её?</h2>
          <div className="form__counter">Шаг {lastStep}/{lastStep}</div>
        </div>
        <fieldset className="fieldset">
          <input name="name" type="text" className="fieldset__input-text" placeholder="Как вас зовут?" id="name"
                 defaultValue={contacts.get(questionNames.name) ?? ""}
                 required onChange={(event) => {
            handleChange(questionNames.name, event.target.value);
          }
          } />
          <input name="phone" type="text" className="fieldset__input-text" pattern="^\\+?\\d{0,20}(\\(\\d{1,20}\\))?$"
                 placeholder="Номер телефона" id="number" required
                 defaultValue={contacts.get(questionNames.phone) ?? ""}
                 onChange={(event) => {
                   handleChange(questionNames.phone, event.target.value);
                 }}
          />
          <input name="email" type="email" className="fieldset__input-text" placeholder="E-mail" id="email" required
                 defaultValue={contacts.get(questionNames.email) ?? ""}
                 onChange={(event) => {
                   handleChange(questionNames.email, event.target.value);
                 }} />
        </fieldset>
        <Button innerText={ButtonValue.final} buttonHandler={() => {

        }} isActive={true} />
      </div>
    </div>
  );
};

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
