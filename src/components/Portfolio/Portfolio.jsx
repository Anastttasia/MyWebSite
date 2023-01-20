import React from "react";
import slider from './slider';
import s from './Portfolio.module.css';


const Portfolio = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>

                <h1 className={s.nameConttainer} id="portfolio">Портфолио</h1>
                <div className={s.sliderContainer}>
                    <button className={s.button} id="leftButton">❮</button>
                    <div className={s.contentSlider}></div>
                    <button className={s.button} id="rightButton">❯</button>
                </div>
                
                <script src={slider}></script>
            </div>
        </div>
    )
}

export default Portfolio;