import React, { ReactElement, useState } from "react";
import { questionsData } from "@base/questions-data";
import RadioSet from "@components/RadioSet";
import SelectSet from "@components/SelectSet";
import { answerType, questionNames } from "types/types";
import ContactForm from "@components/ContactForm";
import PrevButton from "@components/buttons/PrevButton";
import NextButton from "@components/buttons/NextButton";

const Form = (): ReactElement => {
  //todo перенести функции колбэки в useCallback
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
    [questionNames.email, null],
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

  const handleNextStep = () => {
    setStep(a => a + 1);
  };

  const value = answersObj.get(currentQuestion.name);

  if (step === questionsData.length + 1) {
    return <ContactForm />;
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
                          value={value || ''} />
              ) : currentQuestion.answerType === "select" ? (
                <SelectSet question={currentQuestion}
                           changeCallback={handleSelectChange}
                           key={currentQuestion.id}
                           value={value || undefined} />
              ) : null
            }
            <div className="buttons">
              <PrevButton currentStep={step} buttonHandler={() => {
                setStep(prev => prev - 1);
              }} />
              <NextButton isActive={value !== undefined} buttonHandler={handleNextStep} />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Form;
