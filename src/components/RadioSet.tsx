import React, { ReactElement, useContext } from "react";
import { RadioProps } from "types/types";
import { AnswersContext } from "@components/App";


const RadioSet = (props: RadioProps): ReactElement => {
  const answersContext = useContext(AnswersContext);

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
               props.changeCallback(variant);
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
