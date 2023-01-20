import React from "react";
import s from './AboutMe.module.css';

const myFoto = new URL ("../images/foto.png", import.meta.url);

const AboutMe = () => {
  return (
  <div className={s.container}>
    <div className={s.content}>
      <h1 className={s.nameConttainer} id="about_me">Обо мне</h1>

      <div className={s.inside}>
        <img src={myFoto} className={s.fotoME}/>
          <div className={s.forTextAboutMe}>
            <p className={s.text}>Меня зовут Настя!
              Я проживаю в Санкт - Петербурге.
                В 2021 году я закончила СПБГИКиТ по направлению "телевидение".
                Но я узнала о Fronten-разрабтке и очень захотела стать частью
                сферы IT.
                Так что свой опыт программирования получаю через pet-проекты!
            </p>
          </div>
      </div>
    </div>
  </div>
  )
}

export default AboutMe;