import React, { ReactElement } from "react";
import { AnswerRecord, ButtonValue, SetProps } from "types/types";
import Button from "@components/button/Button";

const RadioSet = (props: SetProps): ReactElement => {

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
                 id: variant
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
        <Button type={ButtonValue.prev} isThereCurrentValue={true} buttonHandler={() => {} }/>
        <Button type={ButtonValue.next} isThereCurrentValue={true} buttonHandler={() => {
          //если вопрос селект, вызвать коллбэк handleChange
          //кнопка назад должна знать 1)текущий степ
          //кнопка вперед должна знать 1) тип вопроса
          //нужны ли функции шагнуть назад/шагнуть вперед

          //todo вставила кнопки внутрь вопросов, сломался механизм шага вперед
        }
        } />
      </div>
    </>
  )
    ;
};

export default RadioSet;
