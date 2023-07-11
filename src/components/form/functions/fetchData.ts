import { questionNames } from "types/types";

const fetchData = (answersObj: Map<questionNames, string | string[] | null>) => {
  const headers = new Headers();
  headers.append("accept", "*/*");
  headers.append("Content-Type", "application/json");
  const obj = Object.fromEntries(answersObj);
  console.log(obj);
  fetch("https://gothic-calling-389914.uc.r.appspot.com/surveys", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: headers
  })
    .then(response => {
      return response.json();
    }).then(data => {
    const body = document.querySelector("body");
    console.log(data);
    //         clearElement(body);
    //         body.append(resultsPage(data));
    //         resetForm();
  })
    .catch(error => {
      console.log(error + "it`s error!");
    });
};


export default fetchData;
