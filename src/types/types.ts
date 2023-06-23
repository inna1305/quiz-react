import { LearningForm } from "types/questionsTypes";

export interface Question {
  question: string,
  name: string,
  answerType: answerType,
  variants: Map<string, string>,
  id: number,
}
export type QuestionSubmitHandler<T> = (data: T) => void;
export type ButtonHandler = () => void;
export type answerType = "radio" | "select";

export interface ButtonProps {
  type: ButtonValue,
  isThereCurrentValue: boolean,
  buttonHandler: ButtonHandler,
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

export interface QuestionElementProps {
  question: Question,
  value: string | string[] | undefined,
  changeCallback: QuestionSubmitHandler<AnswerRecord>
}

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
