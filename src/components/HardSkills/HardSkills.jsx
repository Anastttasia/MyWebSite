import React from "react";
import s from './HaedSkills.module.css';

const HTML5 = new URL("../images/icons8-html-5-120.png", import.meta.url);
const CSS3 = new URL("../images/icons8-css3-120.png", import.meta.url);
const JS = new URL("../images/icons8-javascript-150.png", import.meta.url);
const Git = new URL("../images/icons8-git-150.png", import.meta.url);
const GitHub= new URL("../images/icons8-github-150.png", import.meta.url);

const HardSkills = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>

                <h1 className={s.nameConttainer} id="hard_skills">Hard Skills</h1>
                <div className={s.icon_hard_skills}>

                    <div className={s.card}>
                        <img className={s.imgHardSkills} src={HTML5}/>
                            <p className={s.textHardSkills}>HTML5</p>
                    </div>

                    <div className={s.card}>
                        <img className={s.imgHardSkills} src={CSS3} />
                            <p className={s.textHardSkills}>CSS3</p>
                    </div>

                    <div className={s.card}>
                        <img className={s.imgHardSkills} src={JS}/>
                            <p className={s.textHardSkills}>JS</p>
                    </div>

                    <div className={s.card}>
                        <img className={s.imgHardSkills} src={Git}/>
                            <p className={s.textHardSkills}>Git</p>
                    </div>

                    <div className={s.card}>

                    <a href="https://github.com/Anastttasia" target="_blank">
                            <img src={GitHub} className={s.imgHardSkills} />
                        </a>
                        <p className={s.textHardSkills}>GitHub</p>  
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HardSkills;