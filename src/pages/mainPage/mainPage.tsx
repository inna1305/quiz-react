import React from "react";
import { ReactElement } from "react";
import Form from "../../components/Form";
const MainPage = (): ReactElement => {
  return(
    <div className="container">
      <div className="about"><h1 className="about__title">Подберем ВУЗ мечты</h1><p
        className="about__description">Ответьте на 8 простых вопросов, и мы составим список наболее подходящих для вас
        вузов</p>
        <div className="about__decor">
          <div className="about__decor_word1 about__decor_word">Бесплатно</div>
          <div className="about__decor_word2 about__decor_word">за 30 секунд</div>
          <div className="about__decor_circle"></div>
          <div className="about__decor_line"></div>
          <div className="about__decor_light"></div>
          <div className="about__decor_bottom"></div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default MainPage;