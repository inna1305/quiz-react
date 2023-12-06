import React, { createContext, useState } from 'react';
import { IAnswersContext, IStepContext, questionNames } from 'types/types';
import Form from '@components/form/Form';
import Decor from '@components/decor/Decor';

export const AnswersContext = createContext<IAnswersContext | null>(null);

const initialStepContext: IStepContext = {
  step: 0,
  setStep: () => {},
};
export const StepContext = createContext<IStepContext>(initialStepContext);

const App: React.FC = () => {
  //обработать ответ от сервера, результат передать в страницу результата как data
  const [answersObj, setAnswer] = useState<Map<questionNames, string | string[] | null>>(
    new Map([
      [questionNames.initiator, null],
      [questionNames.cities, null],
      [questionNames.currentEducation, null],
      [questionNames.learningForm, null],
      [questionNames.paidEducationAllowedType, null],
      [questionNames.educationSpecialityType, null],
      [questionNames.educationTargetType, null],
      [questionNames.howManyToAdmission, null],
      [questionNames.name, null],
      [questionNames.phone, null],
      [questionNames.email, null],
    ])
  );

  const [step, setStep] = useState(1);

  const answersContextValue: IAnswersContext = { answers: answersObj, setAnswer: setAnswer };
  const stepContextValue: IStepContext = { step: step, setStep: setStep };

  return (
    <StepContext.Provider value={stepContextValue}>
      <AnswersContext.Provider value={answersContextValue}>
        <div className="container">
          <Decor />
          <Form />
        </div>
      </AnswersContext.Provider>
    </StepContext.Provider>
  );
};

export default App;
