import React, { ReactElement, useState } from "react";
import { AnswerRecord, SetProps } from "types/types";

const RadioSet = (props: SetProps): ReactElement => {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const handleChange = (value: AnswerRecord) => {
    setAnswers([...answers, value]);
    console.log(value.value);
  };

  const variants = Array.from(props.question.variants.keys());
  const arrVariantsElem = variants.map((variant, index) => (
      <label htmlFor={variant} key={index} className="fieldset__label">{props.question.variants.get(variant)}
        <input className="fieldset__input" id={variant} type="radio" value={variant} name="variant" onInput={() => {
          const answer: AnswerRecord = {
            name: "",
            value: variant,
            id: variant
          };
          handleChange(answer);
        }}></input>
        <span className="fieldset__checkmark"></span>
      </label>
  ));

  //от чего зависит кнопка далее и назад
  //можно ли сделать одинаковые хэндлеры для радио и селект кнопок или одного типа
  // (назад и вперед) для разных типов вопроса

  return (
    <>
        {arrVariantsElem}
    </>
  )
    ;
};

export default RadioSet;