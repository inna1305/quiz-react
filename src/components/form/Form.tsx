import React, { ReactElement, useState } from "react";
import { questionsData } from "@base/questions-data";
import RadioSet from "@components/RadioSet";
import SelectSet from "@components/SelectSet";
import { ButtonValue, ContactsStateRecord, IResponse, questionNames } from "types/types";
import Button from "@components/buttons/Button";
import ContactForm from "@components/ContactForm";

const testObj: Map<questionNames, string | string[] | null> = new Map;
const fetchData = ()=> {
  const headers = new Headers();
  headers.append("accept", "*/*");
  headers.append("Content-Type", "application/json");
  const obj = Object.fromEntries(testObj);

  fetch("https://gothic-calling-389914.uc.r.appspot.com/surveys", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: headers
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.log(error + "it's an error!");
      throw error;
    });

  //const fetchData = () => {
  //
  //     const headers = new Headers();
  //     headers.append('accept', '*/*');
  //     headers.append('Content-Type', 'application/json');
  //     const requestBody = getRequestBody();
  //
  //     fetch('https://gothic-calling-389914.uc.r.appspot.com/surveys', {
  //         method: 'POST',
  //         body: JSON.stringify(requestBody),
  //         headers: headers
  //     })
  //         .then(response => {
  //             return response.json();
  //         }).then(data => {
  //         const body = document.querySelector('body');
  //         clearElement(body);
  //         body.append(resultsPage(data));
  //         resetForm();
  //     })
  //         .catch(error => {
  //             console.log(error + 'it`s error!');
  //         });
  // }
};

export async function loader() {
  const contacts = await fetchData();
  return { contacts };
}

const Form = (): ReactElement => {
  //todo перенести функции колбэки в useCallback (только внутри юзеффект или сложные функции)
  //todo prev button work - for it useEffect?

  const [answersObj, setAnswer] = useState<Map<questionNames, string | string[] | null>>(new Map([
    [questionNames.initiator, null],
    [questionNames.cities, null],
    [questionNames.currentEducation, null],
    [questionNames.learningForm, null],
    [questionNames.paidEducationAllowedType, null],
    [questionNames.educationSpecialityType, null],
    [questionNames.educationTargetType, null],
    [questionNames.howManyToAdmission, null],
    [questionNames.name, null],
    [questionNames.phone, null],
    [questionNames.email, null]
  ]));

  const [step, setStep] = useState(1);

  const currentQuestion = questionsData[step - 1];

  const handleRadioChange = (newValue: string) => {
    setAnswer(answersObj.set(currentQuestion.name, newValue));
    setStep(a => a + 1);
  };

  const handleSelectChange = (value: string[]) => {
    setAnswer(answersObj.set(currentQuestion.name, value));
  };

  const submitHandle = (contactsArray: ContactsStateRecord[]) => {
    contactsArray.forEach(contact => {
      setAnswer(answersObj.set(contact.questionNames, contact.value));
    });
  };



  if (step === questionsData.length + 1) {
    return <ContactForm submitCallback={submitHandle} />;
  } else {
    const value = answersObj.get(currentQuestion.name);

    return (
      <div className="form">
        <div className="form__container">
          <div className="form__title-counter-container">
            <h2 className="form__title">{currentQuestion.question}</h2>
            <div className="form__counter">Шаг {step}/{questionsData.length + 1}</div>
          </div>
          <div className="form__question">
            {
              currentQuestion.answerType === "radio" ? (
                <RadioSet question={currentQuestion}
                          changeCallback={handleRadioChange}
                          key={currentQuestion.id}
                          value={value || undefined} />
              ) : currentQuestion.answerType === "select" ? (
                <SelectSet question={currentQuestion}
                           changeCallback={handleSelectChange}
                           key={currentQuestion.id}
                           value={value || undefined} />
              ) : null
            }
            <div className="buttons">
              <Button isActive={step > 1} innerText={ButtonValue.prev} buttonHandler={() => {
                setStep(prev => prev - 1);
              }} />
              <Button isActive={value !== undefined} innerText={ButtonValue.next} buttonHandler={() => {
                setStep(a => a + 1);
              }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Form;
