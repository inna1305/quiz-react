import React, { createContext, useReducer } from 'react';
import { questionNames } from 'types/types';
import Form from '@components/form/Form';
import Decor from '@components/decor/Decor';
import { IReducerAction, IReducerState, reducer } from '@components/App/appReducer';

export const initialState = {
  questions: new Map([
    [questionNames.initiator, ''],
    [questionNames.cities, ''],
    [questionNames.currentEducation, ''],
    [questionNames.learningForm, ''],
    [questionNames.paidEducationAllowedType, ''],
    [questionNames.educationSpecialityType, ''],
    [questionNames.educationTargetType, ''],
    [questionNames.howManyToAdmission, ''],
    [questionNames.name, ''],
    [questionNames.phone, ''],
    [questionNames.email, ''],
  ]),
  step: 1,
};

export const StepContext = createContext<{
  state: IReducerState;
  dispatch: React.Dispatch<IReducerAction>;
}>({ state: initialState, dispatch: (value) => {} });

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //обработать ответ от сервера, результат передать в страницу результата как data
  return (
    <StepContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <Decor />
        <Form />
      </div>
    </StepContext.Provider>
  );
};

export default App;
