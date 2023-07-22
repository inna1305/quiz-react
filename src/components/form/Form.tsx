import React, { ReactElement, useContext } from "react";
import { questionsData } from "@base/questions-data";
import RadioSet from "@components/RadioSet";
import SelectSet from "@components/SelectSet";
import { ButtonValue, questionNames } from "types/types";
import Button from "@components/buttons/Button";
import ContactForm from "@components/ContactForm";
import { AnswersContext, StepContext } from "@components/App";

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
};

export async function loader() {
  const contacts = await fetchData();
  return { contacts };
}

const Form = (): ReactElement => {
  //todo prev button work - for it useEffect?
  const answersContext = useContext(AnswersContext);
  const stepContext = useContext(StepContext);

  const currentQuestion = questionsData[stepContext.step - 1];

  if (stepContext.step === questionsData.length + 1) {
    return <ContactForm />;
  } else {
    const value = answersContext?.answers.get(currentQuestion.name);

    return (
      <div className="form">
        <div className="form__container">
          <div className="form__title-counter-container">
            <h2 className="form__title">{currentQuestion.question}</h2>
            <div className="form__counter">Шаг {stepContext.step}/{questionsData.length + 1}</div>
          </div>
          <div className="form__question">
            {
              currentQuestion.answerType === "radio" ? (
                <RadioSet question={currentQuestion}
                          key={currentQuestion.id}
                          value={value || undefined} />
              ) : currentQuestion.answerType === "select" ? (
                <SelectSet question={currentQuestion}
                           key={currentQuestion.id}
                           value={value || undefined} />
              ) : null
            }
            <div className="buttons">
              <Button isActive={stepContext.step > 1} innerText={ButtonValue.prev} buttonHandler={() => {
                stepContext.setStep(prev => prev - 1);
              }} />
              <Button isActive={value !== undefined} innerText={ButtonValue.next} buttonHandler={() => {
                stepContext.setStep(a => a + 1);
              }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Form;
