const initiatorMap = new Map([['YOURSELF', 'Себе'], ['SPOUSE', 'Супругу/супруге'], ['RELATIVE', 'Родственнику'], ['COLLEAGUE', 'Коллеге'], ['CHILD', 'Ребенку'], ['OTHER', 'Другое']]);
const citiesMap = new Map([['Санкт-Петербург', 'Санкт-Петербург'], ['Москва', 'Москва'], ['Нижний Новгород', 'Нижний Новгород'], ['Ростов-на-Дону', 'Ростов-на-Дону']]);
const currentEducationMap = new Map([['GRADE_9', '9 классов'], ['GRADE_11', '11 классов'], ['TECHNICAL_SCHOOL', 'Училище'], ['TECHNICAL_COLLEGE', 'Колледж/техникум'], ['UNCOMPLETED_UNIVERSITY', 'Неоконченное высшее'], ['UNIVERSITY', 'Высшее']]);
const educationTargetTypeMap = new Map([['UNIVERSITY', 'Вуз'], ['TECHNICAL_COLLEGE', 'Колледж/техникум'], ['TECHNICAL_SCHOOL', 'Училище']]);
const learningFormMap = new Map([['FULL_TIME', 'Очную'], ['EXTRAMURAL', 'Заочную'], ['DISTANCE', 'Дистанционную']]);
const paidEducationAllowedTypeMap = new Map([['BUDGET_ONLY', 'Нет, только бюджет'], ['PAID_EDUCATION', 'Да, планирую учиться платно'], ['ANY', 'Возможны оба варианта']]);
const howManyToAdmissionMap = new Map([['ASAP', 'Как можно быстрее'], ['MONTH', 'Месяц'], ['QUARTER', 'Квартал'], ['SIX_MONTHS', 'Полгода'], ['YEAR', 'Год']]);
const educationSpecialityTypeMap = new Map([['ECONOMICS', 'Экономика'], ['PHILOSOPHY', 'Философия'], ['SOCIOLOGY', 'Социология'], ['LAW', 'Юриспруденция']]);
export const questionsData = [
    {
        question: 'Для кого вы ищете учебное заведение?',
        name: 'initiator',
        answerType: 'radio',
        variants: initiatorMap,
        id: 1,
    },
    {
        question: 'В каком городе планируете поступать?',
        name: 'cities',
        answerType: 'select',
        variants: citiesMap,
        id: 2,
    },
    {
        question: 'Какое образование уже есть?',
        name: 'currentEducation',
        answerType: 'radio',
        variants: currentEducationMap,
        id: 3,
    },
    {
        question: 'Куда планируете поступать?',
        name: 'educationTargetType',
        answerType: 'radio',
        variants: educationTargetTypeMap,
        id: 4,
    },
    {
        question: 'Какую форму обучения предпочитаете?',
        name: 'learningForm',
        answerType: 'radio',
        variants: learningFormMap,
        id: 5,
    },
    {
        question: 'Рассматриваете платное обучение?',
        name: 'paidEducationAllowedType',
        answerType: 'radio',
        variants: paidEducationAllowedTypeMap,
        id: 6,
    },
    {
        question: 'Какая специальность интересует?',
        name: 'educationSpecialityType',
        answerType: 'select',
        variants: educationSpecialityTypeMap,
        id: 7,
    },
    {
        question: 'Как скоро планируете поступать?',
        name: 'howManyToAdmission',
        answerType: 'radio',
        variants: howManyToAdmissionMap,
        id: 8,
    },
];