import { questionNames } from 'types/types';

const testObj: Map<questionNames, string | string[] | null> = new Map();
const fetchData = () => {
  const headers = new Headers();
  headers.append('accept', '*/*');
  headers.append('Content-Type', 'application/json');
  const obj = Object.fromEntries(testObj);

  fetch('https://gothic-calling-389914.uc.r.appspot.com/surveys', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error + "it's an error!");
      throw error;
    });
};

export function loader() {
  const contacts = fetchData();
  return { contacts };
}
