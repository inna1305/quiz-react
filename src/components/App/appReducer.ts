//какие actions нужны?
//1) обновление шага (шаг вперед, шаг назад)
//2) записать новый ответ на вопрос
//3) разблокировать кнопку "далее"

import { Action, questionNames } from 'types/types';

export interface IReducerState {
  questions: Map<questionNames, string | string[]>;
  step: number;
}

export interface IReducerAction {
  type: string;
}

export function reducer(state: IReducerState, action: IReducerAction) {
  switch (action.type) {
    case Action.stepForward: {
      const questions = new Map(state.questions);
      return { ...state, questions: questions, step: state.step + 1 };
    }
    case Action.stepBack: {
      const questions = new Map(state.questions);
      return { ...state, questions: questions, step: state.step - 1 };
    }
  }
  throw Error('Unknown action: ' + action.type);
}
