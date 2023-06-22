import React, { ReactElement } from "react";
import { ButtonValue, SetProps } from "types/types";
import Button from "@components/button/Button";

const SelectSet = (props: SetProps): ReactElement => {
  const variants = Array.from(props.question.variants.values());
  const arrVariantsElem = variants.map((variant, index) => (
        <option className="fieldset__option" id={variant} value={variant} key={index}>{variant}</option>
  ));
  //todo сделать переход по нажатию кнопки (запись ответа, шаг вперед)

  return (
    <fieldset className="fieldset">
    <select multiple className="select">
          {arrVariantsElem}
          <div className="buttons">
            <Button type={ButtonValue.prev} isThereCurrentValue={true} buttonHandler={() => {} }/>
            <Button type={ButtonValue.next} isThereCurrentValue={true} buttonHandler={() => {
              //если вопрос селект, вызвать коллбэк handleChange
              //кнопка назад должна знать 1)текущий степ
              //кнопка вперед должна знать 1) тип вопроса
              //нужны ли функции шагнуть назад/шагнуть вперед
            }
            } />
          </div>
        </select>
    </fieldset>
  );
};

export default SelectSet;
