import { LearningForm } from "types/questionsTypes";

export interface Question {
  question: string,
  name: string,
  answerType: answerType,
  variants: Map<string, string>,
  id: number,
}

export type answerType = "radio" | "select";

export interface ButtonProps {
  type: ButtonValue,
  isThereCurrentValue: boolean,
  buttonHandler: ButtonClickHandler<string>
}

export enum ButtonValue {
  "next" = "Вперёд >",
  "prev" = "< Назад",
  "final" = "Получить подборку"
}

export interface AnswerRecord {
  name: string,
  value: string | string[],
  id: string,
}

export interface SetProps {
  question: Question,
  changeCallback: ButtonClickHandler<AnswerRecord>
}

export type ButtonClickHandler<T> = (data: T) => void;

export interface IRequestBody {
  initiator: string,
  cities: string[],
  currentEducation: string,
  educationTargetType: string,
  learningForm: LearningForm,
  paidEducationAllowedType: string,
  educationSpecialityType: string[],
  howManyToAdmission: string,
  name: string,
  phone: string,
  email: string
}
