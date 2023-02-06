import React from "react";
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.footer} id="contacts">
            <div className={s.map}>
                <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1571eea7f2c8c984af7d0766261d0f56b2e7c45042cef154ce8711f9b7dba1f3&amp;width=600&amp;height=300&amp;lang=ru_RU&amp;scroll=true">
                </script>

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