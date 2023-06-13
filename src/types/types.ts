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