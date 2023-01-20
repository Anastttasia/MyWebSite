import React from "react";
import s from './NowTime.module.css';


let clock = document.querySelector('.nowTime');
let nowDate = new Date();
let hours = nowDate.getHours();
let minutes = nowDate.getMinutes();
let sec = nowDate.getSeconds();



// const NowTime = () => {
//     return (
//         <div>
          
//           function time() {
//                 if(hours < 10) {
//                     hours = "0" + hours;
//                 }
                
//                 if(minutes < 10) {
//                  minutes = "0" + minutes;
//                 }
//                 if(sec < 10) {
//                     sec = "0" + sec;
//                 }

//             clock.innerHTML = `${hours}:${minutes}:${sec}`;
//             }

//         </div>

//     setInterval(time, 1000))
// }

// export default NowTime;