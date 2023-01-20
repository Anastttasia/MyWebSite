import React from "react";
import s from './Certificate.module.css';

const imgCertificate = new URL("../images/certificate.png", import.meta.url);
const imgCertificate2 = new URL("../images/certificate.png", import.meta.url);

const Certificate = (props) => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <h1 className={s.nameConttainer} id="certificate">Сертификаты</h1>

                <div className={s.gridCertificate}>
                    <img className={s.imgCertificate} src={imgCertificate} onclick="openModalWindow(this)"/>
                    <img className={s.imgCertificate} src={imgCertificate2} onclick="openModalWindow(this)"/>
                </div>

            </div>
        </div>

    )
}

export default Certificate;