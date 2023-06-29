import { AnswerRecord } from "types/types";

export const getAnswerRecord = (questionName: string, value: string | string[], id: number): AnswerRecord => {
  return {
    name: questionName,
    value: value,
    id: id
  };
}
