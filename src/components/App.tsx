import React, { createContext, Dispatch, SetStateAction, useState } from "react";
import Quiz from "../pages/quizPage/quiz";
import { questionNames } from "types/types";

interface IContext {
  answers: Map<questionNames, string | string[] | null>,
  setAnswer: Dispatch<SetStateAction<Map<questionNames, string | string[] | null>>>;
}

export const TestContext = createContext<IContext | null>(null);

const App: React.FC = () => {
  //обработать ответ от сервера, результат передать в страницу результата как data
  const [answersObj, setAnswer] = useState<Map<questionNames, string | string[] | null>>(new Map([
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
    [questionNames.email, null]
  ]));
  const value: IContext = { answers: answersObj, setAnswer: setAnswer };

  return (
    <TestContext.Provider value={value}>
      <Quiz />
    </TestContext.Provider>
  );
};

export default App;
