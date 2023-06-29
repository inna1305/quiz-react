import React, { ReactElement, useState } from "react";
import { SelectProps } from "types/types";

const SelectSet = (props: SelectProps): ReactElement => {
  const handleOptionsChoosing = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    props.changeCallback(selectedValues);
  };

  const variants = Array.from(props.question.variants.values());
  const arrVariantsElem = variants.map((variant, index) => {
    return React.createElement("option", {
      className: "fieldset__option",
      id: variant,
      value: variant,
      key: index
    }, variant);
  });

  return (
    <>
      <fieldset className="fieldset fieldset_select">
        <select multiple className="select" onChange={handleOptionsChoosing}>
          {arrVariantsElem}
        </select>
      </fieldset>
    </>
  );
};

export default SelectSet;
