import React from "react";
import s from './Certificate.module.css';
import Modal from './ModalWindow'
import { useState } from 'react';

const imgCertificate = new URL("../images/certificate.png", import.meta.url);
const imgCertificate2 = new URL("../images/certificate2.png", import.meta.url);

const Certificate = (props) => {
    const [{modalActive, activeImage}, setModalActive] = useState(false, imgCertificate);
    return (
        <div className={s.container}>
            <div className={s.content}>
                <h1 className={s.nameConttainer} id="certificate">Сертификаты</h1>

                <div className={s.gridCertificate}>
                    <img className={s.imgCertificate} src={imgCertificate} onClick={() => setModalActive({modalActive: true, activeImage: imgCertificate})} />
                    <img className={s.imgCertificate} src={imgCertificate2} onClick={() => setModalActive({modalActive: true, activeImage: imgCertificate2})} />
                </div>
                
                <Modal active={modalActive} setActive={setModalActive}>
                    <img className={s.imgModel} src={activeImage} />
                </Modal>
            </div>
        </div>

    )
}

export default Certificate;