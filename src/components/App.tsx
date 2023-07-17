import React, { createContext } from "react";
import { DataContextProps, IResponse } from "types/types";
import Quiz from "../pages/quizPage/quiz";


const App: React.FC = () => {
  const DataContext = createContext<DataContextProps | undefined>(undefined);

  //обработать ответ от сервера, результат передать в страницу результата как data

  return (
    <Quiz />
  );
};

export default App;
