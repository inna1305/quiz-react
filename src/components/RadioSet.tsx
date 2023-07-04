import React, { ReactElement } from "react";
import { RadioProps } from "types/types";

const RadioSet = (props: RadioProps): ReactElement => {
  //todo если нажать на нажатую пупку она тогглится при перезаходе(теряет значение) - проверено только наглядно

  const variants = Array.from(props.question.variants.keys());

  const oldValue = props.value;

  const arrVariantsElem = variants.map((variant, index) => (
    <label htmlFor={variant} key={index} className="fieldset__label">{props.question.variants.get(variant)}
      <input className="fieldset__input"
             id={variant}
             type="radio"
             value={props.value}
             checked={props.value !== undefined && props.value === variant}
             name="variant"
             onChange={() => {
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
