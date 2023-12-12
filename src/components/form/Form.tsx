import React, { ReactElement, useContext } from 'react';
import { questionsData } from '@base/questions-data';
import RadioSet from '@components/RadioSet';
import SelectSet from '@components/SelectSet';
import { ButtonValue } from 'types/types';
import Button from '@components/buttons/Button';
import ContactForm from '@components/ContactForm';
import { initialState, StepContext } from '@components/App/App';
import { IReducerAction, IReducerState } from '@components/App/appReducer';

const Form = (): ReactElement => {
  const contextValue = useContext(StepContext) as
    | { state: IReducerState; dispatch: React.Dispatch<IReducerAction> }
    | undefined;
  const { state, dispatch } = contextValue || { state: initialState, dispatch: () => {} };

  const currentQuestion = questionsData[state.step! - 1];

  if (state.step === questionsData.length + 1) {
    return <ContactForm />;
  } else {
    const value = state?.questions.get(currentQuestion.name);

    return (
      <div className="form">
        <div className="form__container">
          <div className="form__title-counter-container">
            <h2 className="form__title">{currentQuestion.question}</h2>
            <div className="form__counter">
              Шаг {state.step}/{questionsData.length + 1}
            </div>
          </div>
          <div className="form__question">
            {currentQuestion.answerType === 'radio' ? (
              <RadioSet
                question={currentQuestion}
                key={currentQuestion.id}
                value={value || undefined}
              />
            ) : currentQuestion.answerType === 'select' ? (
              <SelectSet
                question={currentQuestion}
                key={currentQuestion.id}
                value={value || undefined}
              />
            ) : null}
            <div className="buttons">
              <Button
                isActive={state.step! > 1}
                innerText={ButtonValue.prev}
                buttonHandler={() => {
                  dispatch({
                    type: 'decremented_step',
                  });
                }}
              />
              <Button
                isActive={value !== undefined}
                innerText={ButtonValue.next}
                buttonHandler={() => {
                  dispatch({ type: 'incremented_step' });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Form;
