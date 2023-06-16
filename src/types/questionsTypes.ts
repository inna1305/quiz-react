export type InitiatorKey = "YOURSELF" | "SPOUSE" | "RELATIVE" | "COLLEAGUE" | "CHILD" | "OTHER";
export type InitiatorValue = "Себе" | "Супругу/супруге" | "Родственнику" | "Коллеге" | "Ребенку" | "Другое";

export type City = "Санкт-Петербург" | "Москва" | "Нижний Новгород" | "Ростов-на-Дону";

export type EducationLevel =
  "GRADE_9"
  | "GRADE_11"
  | "TECHNICAL_SCHOOL"
  | "TECHNICAL_COLLEGE"
  | "UNCOMPLETED_UNIVERSITY"
  | "UNIVERSITY";

export type EducationDescription =
  "9 классов"
  | "11 классов"
  | "Училище"
  | "Колледж/техникум"
  | "Неоконченное высшее"
  | "Высшее";

export type EducationTargetType = "UNIVERSITY" | "TECHNICAL_COLLEGE" | "TECHNICAL_SCHOOL";
export type EducationTargetDescription = "Вуз" | "Колледж/техникум" | "Училище";

export type LearningForm = "FULL_TIME" | "EXTRAMURAL" | "DISTANCE";
export type LearningFormDescription = "Очную" | "Заочную" | "Дистанционную";

export type PaidEducationAllowedType = "BUDGET_ONLY" | "PAID_EDUCATION" | "ANY";
export type PaidEducationAllowedDescription =
  "Нет, только бюджет"
  | "Да, планирую учиться платно"
  | "Возможны оба варианта";

export type HowManyToAdmission = "ASAP" | "MONTH" | "QUARTER" | "SIX_MONTHS" | "YEAR";
export type HowManyToAdmissionDescription = "Как можно быстрее" | "Месяц" | "Квартал" | "Полгода" | "Год";

export type EducationSpecialityType = "ECONOMICS" | "PHILOSOPHY" | "SOCIOLOGY" | "LAW";
export type EducationSpecialityDescription = "Экономика" | "Философия" | "Социология" | "Юриспруденция";

