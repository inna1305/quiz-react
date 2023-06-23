import React, { ReactElement } from "react";
import { AnswerRecord, ButtonValue, QuestionElementProps } from "types/types";
import Button from "@components/button/Button";

const RadioSet = (props: QuestionElementProps): ReactElement => {

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
                 id: String(props.question.id)
               };
               props.changeCallback(answer);
             }}></input>
      <span className="fieldset__checkmark"></span>
    </label>
  ));

  //от чего зависит кнопка далее и назад
  //можно ли сделать одинаковые хэндлеры для радио и селект кнопок или одного типа
  // (назад и вперед) для разных типов вопроса

  return (<>
      <fieldset className="fieldset">
        {arrVariantsElem}
      </fieldset>
      <div className="buttons">
        <Button type={ButtonValue.prev} isThereCurrentValue={true} buttonHandler={() => {
        }} />
        <Button type={ButtonValue.next} isThereCurrentValue={true} buttonHandler={() => {

        }
        } />
      </div>
    </>
  )
    ;
};

export default RadioSet;
