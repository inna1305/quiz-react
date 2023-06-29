import React, { useState } from "react";
import { ReactElement } from "react";
import { questionsData } from "@base/questions-data";
import RadioSet from "@components/RadioSet";
import SelectSet from "@components/SelectSet";
import { AnswerRecord, ButtonValue } from "types/types";
import Button from "@components/button/Button";
import ContactForm from "@components/ContactForm";
import { getAnswerRecord } from "@components/form/functions/getAnswerRecord";

const Form = (): ReactElement => {
  //todo перенести функции колбэки в useCallback
  //todo prev button work - for it useEffect?

  const [step, setStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [answersMap, setAnswersMap] = useState<Map<number, AnswerRecord>>(new Map<number, AnswerRecord>());

  const currentQuestion = questionsData[step - 1];

  const handleRadioChange = (value: AnswerRecord) => {
    setAnswersMap(answersMap.set(value.id, value));
    setStep(a => a + 1);
  };

  const handleSelectChange = (value: string[]) => {
    setSelectedOptions(value);
    //todo setButtonState(step, );??
    //если значение уже заполнено, состояние кнопок не менять
  };

  const submitSelectedOptions = () => {
    const answer = getAnswerRecord(currentQuestion.name, selectedOptions, currentQuestion.id);
    setAnswersMap(answersMap.set(answer.id, answer));
    setStep(a => a + 1);
  };

  if (step === questionsData.length + 1) {
    return <ContactForm />
  } else {
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
                          value={answersMap.get(currentQuestion.id)?.value} />
              ) : currentQuestion.answerType === "select" ? (
                <SelectSet question={currentQuestion}
                           changeCallback={handleSelectChange}
                           key={currentQuestion.id}
                           value={answersMap.get(currentQuestion.id)?.value} />
              ) : null
            }
            <div className="buttons">
              <Button type={ButtonValue.prev} isThereCurrentValue={step > 1} buttonHandler={() => {
                setStep(prev => prev - 1);
              }} />
              <Button type={ButtonValue.next} isThereCurrentValue={true} buttonHandler={submitSelectedOptions} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  ;
};

export default Form;
