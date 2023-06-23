import React, { ReactElement, useState } from "react";
import { AnswerRecord, ButtonValue, QuestionElementProps } from "types/types";
import Button from "@components/button/Button";

const SelectSet = (props: QuestionElementProps): ReactElement => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionsChoosing = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(event?.target?.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
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
      <div className="buttons">
        <Button type={ButtonValue.prev} isThereCurrentValue={true} buttonHandler={() => {
        }} />
        <Button type={ButtonValue.next} isThereCurrentValue={true} buttonHandler={() => {
          const answer: AnswerRecord = {
            name: props.question.name,
            value: selectedOptions,
            id: String(props.question.id)
          };
          props.changeCallback(answer);
        }} />
      </div>
    </>
  );
};

export default SelectSet;
