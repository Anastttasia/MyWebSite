import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from './NowTime.module.css';

const getNowDate = () => {
    const date = new Date();
    
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
};

const NowTime = () => {
    const [{ hours, minutes, seconds}, setCounter] = useState(getNowDate());

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(getNowDate());
        }, 1000);

    return () => {
        clearInterval(interval);
    };
},[]);

    return <div className={s.styleNowTime}>
        {`${hours}:${minutes}:${seconds}`}
        </div>
};

export default NowTime;