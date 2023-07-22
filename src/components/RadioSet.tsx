import React, { ReactElement, useContext } from "react";
import { QuestionElementProps } from "types/types";
import { AnswersContext, StepContext } from "@components/App";


const RadioSet = (props: QuestionElementProps): ReactElement => {
  const answersContext = useContext(AnswersContext);
  const stepContext = useContext(StepContext);

  const variants = Array.from(props.question.variants.keys());

  const arrVariantsElem = variants.map((variant, index) => (
    <label htmlFor={variant} key={index} className="fieldset__label">{props.question.variants.get(variant)}
      <input className="fieldset__input"
             id={variant}
             type="radio"
             value={props.value}
             checked={props.value !== undefined && props.value === variant}
             name="variant"
             onChange={() => {
               answersContext?.setAnswer(answersContext?.answers.set(props.question.name, variant));
               stepContext.setStep(a => a + 1);
             }}></input>
      <span className="fieldset__checkmark"></span>
    </label>
  ));

  return (
    <fieldset className="fieldset">
      {arrVariantsElem}
    </fieldset>
  )
    ;
};

export default RadioSet;
