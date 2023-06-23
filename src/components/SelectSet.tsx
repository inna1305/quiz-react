import React, { ReactElement, useState } from "react";
import { ButtonValue, SelectProps, SetProps } from "types/types";
import Button from "@components/button/Button";

const SelectSet = (props: SelectProps): ReactElement => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionsChoosing = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event?.target?.selectedOptions);
    const selectedValues = Array.from(event?.target?.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  const variants = Array.from(props.question.variants.values());
  const optionElements: ReactElement[] = [];
  const arrVariantsElem = variants.map((variant, index) => {
    const optionElement = React.createElement("option", {
      className: "fieldset__option",
      id: variant,
      value: variant,
      key: index
    }, variant);
    optionElements.push(optionElement);

    return optionElement;
  });

  return (
    <>
      <fieldset className="fieldset fieldset_select">
        <select multiple className="select" onChange={handleOptionsChoosing}>
          {arrVariantsElem}
        </select>
      </fieldset>
      <div className="buttons">
        <Button type={ButtonValue.prev} isThereCurrentValue={true} buttonHandler={() => {
        }} />
        <Button type={ButtonValue.next} isThereCurrentValue={true} buttonHandler={() => {
          console.log(selectedOptions);
        }} />
      </div>
    </>
  );
};

export default SelectSet;
