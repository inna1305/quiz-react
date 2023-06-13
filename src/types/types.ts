export interface Question {
  question: string,
  name: string,
  answerType: answerType,
  variants: Map<string, string>,
  id: number,
}

export type answerType = 'radio' | 'select';

enum Initiator {
  //const initiatorMap = new Map([['YOURSELF', 'Себе'], ['SPOUSE', 'Супругу/супруге'],
  // ['RELATIVE', 'Родственнику'], ['COLLEAGUE', 'Коллеге'],
  // ['CHILD', 'Ребенку'], ['OTHER', 'Другое']]);
}

export interface ButtonProps {
  type: ButtonValue,
  isThereCurrentValue: boolean
}

export enum ButtonValue {
  'next' = 'Вперёд >',
  'prev' = '< Назад',
  'final' = 'Получить подборку'
}