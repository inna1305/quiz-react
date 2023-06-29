import React, { ReactElement } from "react";
import { RadioProps } from "types/types";
import { getAnswerRecord } from "@components/form/functions/getAnswerRecord";

const RadioSet = (props: RadioProps): ReactElement => {

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
               const answer = getAnswerRecord(props.question.name, variant, props.question.id)
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
