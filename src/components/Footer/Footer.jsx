import React from "react";
import s from './Footer.module.css';
// import Map from "./Map/Map";

const Footer = () => {
    return (
        <div className={s.footer} id="contacts">
            <div className={s.map}>
                
                {/* <Map /> */}

                <p className={s.contactMe}>
                    Телефон: 89116726799
                </p>
                <p className={s.contactMe}>
                    Почта: nastya.kaneva.99@gmail.com
                </p>

            </div>
            <div>
                <p className={s.textFooter}>2022</p>
                <p className={s.textFooter}>Анастасия Канева</p>
            </div>

        </div> 
    )
}

export default Footer;