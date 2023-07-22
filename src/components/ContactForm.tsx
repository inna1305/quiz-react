import React, { ReactElement, useContext, useState } from "react";
import { questionsData } from "@base/questions-data";
import Button from "@components/buttons/Button";
import { ButtonValue, ContactsFormProps, ContactsStateRecord, questionNames } from "types/types";
import { Link } from "react-router-dom";
import { TestContext } from "@components/App";

const ContactForm = (props: ContactsFormProps): ReactElement => {
  const [contacts, setContact] = useState<Array<ContactsStateRecord>>([]);
  const testContext = useContext(TestContext);


  const handleChange = (name: questionNames, newValue: string) => {
    const contactElement: ContactsStateRecord = { questionNames: name, value: newValue };
    setContact((prevContacts) => [...prevContacts, contactElement]);
    contacts.forEach(contact => testContext?.setAnswer(testContext?.answers.set(contact.questionNames, contact.value)));
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
                 required onChange={(event) => {
            handleChange(questionNames.name, event.target.value);
          }
          } />
          <input name="phone" type="text" className="fieldset__input-text" pattern="^\\+?\\d{0,20}(\\(\\d{1,20}\\))?$"
                 placeholder="Номер телефона" id="number" required
                 onChange={(event) => {
                   handleChange(questionNames.phone, event.target.value);
                 }}
          />
          <input name="email" type="email" className="fieldset__input-text" placeholder="E-mail" id="email" required
                 onChange={(event) => {
                   handleChange(questionNames.email, event.target.value);
                 }} />
        </fieldset>
        <Link to={'/results'}>
        <Button innerText={ButtonValue.final} buttonHandler={() => {
          props.submitCallback(contacts);
        }} isActive={true} />
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
