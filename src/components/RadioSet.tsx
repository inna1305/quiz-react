import React, { ReactElement } from "react";
import { AnswerRecord, ButtonValue, QuestionElementProps, RadioProps } from "types/types";
import Button from "@components/button/Button";

const RadioSet = (props: RadioProps): ReactElement => {

  const variants = Array.from(props.question.variants.keys());
  const arrVariantsElem = variants.map((variant, index) => (
    <label htmlFor={variant} key={index} className="fieldset__label">{props.question.variants.get(variant)}
      <input className="fieldset__input"
             id={variant}
             type="radio"
             value={variant}
             checked={props.value !== undefined}
             name="variant"
             onChange={() => {
               const answer: AnswerRecord = {
                 name: props.question.name,
                 value: variant,
                 id: props.question.id
               };
               props.changeCallback(answer);
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
