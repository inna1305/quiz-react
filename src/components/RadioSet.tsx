import React, { ReactElement, useContext } from 'react';
import { Action, QuestionElementProps } from 'types/types';
import { StepContext } from '@components/App/App';

const RadioSet = (props: QuestionElementProps): ReactElement => {
  const { state, dispatch } = useContext(StepContext);

  const variants = Array.from(props.question.variants.keys());

  const arrVariantsElem = variants.map((variant, index) => (
    <label htmlFor={variant} key={index} className="fieldset__label">
      {props.question.variants.get(variant)}
      <input
        className="fieldset__input"
        id={variant}
        type="radio"
        value={props.value}
        checked={props.value !== undefined && props.value === variant}
        name="variant"
        onChange={() => {
          state.questions.set(props.question.name, variant);
          dispatch({ type: Action.stepForward });
        }}
      ></input>
      <span className="fieldset__checkmark"></span>
    </label>
  ));

  return <fieldset className="fieldset">{arrVariantsElem}</fieldset>;
};

export default RadioSet;
