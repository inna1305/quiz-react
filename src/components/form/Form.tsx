import React, { createElement, useState } from "react";
import { ReactElement } from "react";
import { questionsData } from "@base/questions-data";
import RadioSet from "@components/RadioSet";

interface AnswerRecord {
  name: string,
  value: string | string[],
  id: number,
}

const Form = (): ReactElement => {//передается текущий объект вопроса
  const [step, setStep] = useState(1);
  const doNextStep = function() {
    setStep(a => a + 1);
  }
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  // const handleButton = () => {
  //   setAnswers(prevState => )
  // }

  const questions = questionsData;
  return (
    <div className="form">{
      questions.map(question => {
        if (question.answerType === "radio") {
          return <RadioSet{...question} key={question.id}></RadioSet>;
        } else {
          return null;
        }
      })
    }
    </div>
  )
};

export default Form;