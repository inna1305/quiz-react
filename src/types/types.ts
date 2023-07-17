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

export type QuestionSubmitHandler<T> = (data: T) => void;
export type SelectChooseHandler<T> = (data: T) => void;
export type ButtonHandler = () => void;
export type answerType = "radio" | "select";
export type SubmitCallback<T> = (data: T) => void;

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

export interface RadioProps extends QuestionElementProps {
  changeCallback: QuestionSubmitHandler<string>;
}

export interface SelectProps extends QuestionElementProps {
  changeCallback: SelectChooseHandler<string[]>;
}

export interface ContactsFormProps {
  submitCallback: SubmitCallback<ContactsStateRecord[]>;
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

export interface DataContextProps {
  fetchData: (answersObj: Map<questionNames, string | string[] | null>) => Promise<IResponse>;
}
