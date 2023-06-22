import React, { useState } from "react";
import { ReactElement } from "react";
import { questionsData } from "@base/questions-data";
import RadioSet from "@components/RadioSet";
import SelectSet from "@components/SelectSet";
import { AnswerRecord, ButtonValue } from "types/types";
import Button from "@components/button/Button";

const Form = (): ReactElement => {
  const [step, setStep] = useState(1);
  //шаг меняется при нажатии на кнопку вперед либо при нажатии на радиокнопку

  const [answersMap, setAnswersMap] = useState<Map<string, AnswerRecord>>(new Map<string, AnswerRecord>());

  //export type ButtonClickHandler<T> = (event: React.MouseEvent<HTMLButtonElement>, data: T) => void;

  const handleChange = (value: AnswerRecord) => {
    setAnswersMap(answersMap.set(value.name, value));
    doNextStep();
  };

  const doNextStep = function() {
    setStep(a => a + 1);
    console.log(step);
  };

  const currentQuestion = questionsData[step - 1];

  return (
    <div className="form">
      <div className="form__container">
        <div className="form__title-counter-container">
          <h2 className="form__title">{currentQuestion.question}</h2>
          <div className="form__counter">Шаг {step}/{questionsData.length + 1}</div>
        </div>
        <div className="form__question">
          <fieldset className="fieldset">
            {
              currentQuestion.answerType === "radio" ? (
              <RadioSet question={currentQuestion} changeCallback={handleChange} key={currentQuestion.id} />
            ) : currentQuestion.answerType === "select" ? (
              <SelectSet question={currentQuestion} changeCallback={handleChange} key={currentQuestion.id} />
            ) : null
            }
          </fieldset>
        </div>
        <div className="buttons">
          <Button type={ButtonValue.prev} isThereCurrentValue={true} buttonHandler={() => {} }/>
          <Button type={ButtonValue.next} isThereCurrentValue={true} buttonHandler={() => {
          }
          } />
        </div>
      </div>
    </div>
  );
};

export default Form;
