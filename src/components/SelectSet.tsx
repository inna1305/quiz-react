import React, { ReactElement } from "react";
import { SetProps } from "types/types";

const SelectSet = (props: SetProps): ReactElement => {
  const variants = Array.from(props.question.variants.values());
  const arrVariantsElem = variants.map((variant, index) => (
        <option className="fieldset__option" id={variant} value={variant} key={index} onInput={() => {

        }}></option>
  ));

  return (
    <>
        <select multiple className="select">
          {arrVariantsElem}
        </select>
    </>
  );
};

export default SelectSet;