import React from "react";
import s from './Welcome.module.css';



const Welcome = (props) => {
    return (
        <div className={s.container_welcome}>
        <div className={s.welcome}>
            <p> Добро пожаловать на мой веб-сайт!</p>
            <p> Меня зовут Настя!</p>
            <p> Я Frontend-разработчик!</p> 
        </div>
        </div>
    )
}

export default Welcome;