import React, { ReactElement } from "react";
import Button from "@components/button/Button";
import { ButtonValue, Question } from "types/types";

const RadioSet = (question: Question): ReactElement => {
  const variants = Array.from(question.variants.values());
  const arrVariantsElem = variants.map((variant, index) => (
    <div key={index}>
      <label htmlFor={variant}>{variant}
        <input className="fieldset__input" id={variant} type="radio" value={variant} name="variant"></input>
        <span className="fieldset__checkmark"></span>
      </label>
    </div>
  ));

  return (
    <>
      <Button type={ButtonValue.prev} isThereCurrentValue={true} />
      <fieldset>
        {arrVariantsElem}
      </fieldset>
      <Button type={ButtonValue.next} isThereCurrentValue={true} />
    </>
  );
};

export default RadioSet;