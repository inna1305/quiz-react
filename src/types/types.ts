import { Dispatch, SetStateAction } from "react";

export enum questionNames {
  "initiator" = "initiator",
  "cities" = "cities",
  "currentEducation" = "currentEducation",
  "educationTargetType" = "educationTargetType",
  "learningForm" = "learningForm",
  "paidEducationAllowedType" = "paidEducationAllowedType",
  "educationSpecialityType" = "educationSpecialityType",
  "howManyToAdmission" = "howManyToAdmission",
  "name" = "name",
  "phone" = "phone",
  "email" = "email",
}


export interface Question {
  question: string,
  name: questionNames,
  answerType: answerType,
  variants: Map<string, string>,
  id: number,
}

export interface IAnswersContext {
  answers: Map<questionNames, string | string[] | null>,
  setAnswer: Dispatch<SetStateAction<Map<questionNames, string | string[] | null>>>;
}

export interface IStepContext {
  step: number,
  setStep: Dispatch<SetStateAction<number>>
}

export type ButtonHandler = () => void;
export type answerType = "radio" | "select";

export interface ButtonProps {
  innerText: ButtonValue,
  buttonHandler: ButtonHandler,
  isActive: boolean
}

export enum ButtonValue {
  "next" = "Вперёд >",
  "prev" = "< Назад",
  "final" = "Получить подборку"
}

export interface QuestionElementProps {
  question: Question,
  value: string | string[] | undefined
}


export interface ContactsStateRecord {
  questionNames: questionNames,
  value: string
}

export interface IInstitute {
  id: number,
  title: string,
  address: string,
  institutionType: string,
  specialities: string[]
}

export interface IResponse {
  institutions: IInstitute[]
}

export interface IResultsPageProps {
  data: IResponse
}

