import React from "react";
import s from './Header.module.css';
import NowTime from './NowTime/NowTime';


const iconTelegram = new URL("../images/icons8-teleg.png", import.meta.url);
const iconGitHub = new URL("../images/icons8-github-60.png", import.meta.url);
const iconGmail = new URL("../images/icons8-gmail-50.png", import.meta.url);


const Header = () => {
    return (
        <div className={s.header}>
                <div className={s.icon_header}>
                    <div>
                        <p className={s.anknv + ' ' + s.icon}> AN_KNV </p>
                    </div>

                    <div>
                        <a href="https://t.me/anastasiya_kaneva">
                            <img src={iconTelegram} className={s.icon} />
                        </a>
                        <a href="https://github.com/Anastttasia">
                            <img src={iconGitHub} className={s.icon} />
                        </a>
                        <div className={s.tooltip}>
                            <img src={iconGmail} className={s.icon} />
                            <span className={s.tooltiptext}>nastya.kaneva.99@gmail.com</span>
                        </div>

                </div>
            </div>

            <a className={s.aheader} href="#about_me">Обо мне</a>
            <a className={s.aheader} href="#certificate">Сертификаты</a>
            <a className={s.aheader} href="#hard_skills">Hard Skills</a>
            <a className={s.aheader} href="#portfolio">Портфолио</a>
            <a className={s.aheader} href="#contacts">Контакты</a>
            <NowTime />
        </div>
    )
}

export default Header;