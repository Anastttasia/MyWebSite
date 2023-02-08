
let clock = document.querySelector('.styleNowTime');

function time() {
    let nowDate = new Date();
    
    let hours = nowDate.getHours();
    let minutes = nowDate.getMinutes();
    let sec = nowDate.getSeconds();

    if(hours < 10) {
        hours = "0" + hours;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(sec < 10) {
        sec = "0" + sec;
    }
    
    clock.innerHTML = `${hours}:${minutes}:${sec}`;
}
setInterval(time, 1000);


function closeAllModals(event) {
    
    if(event.type == "keydown") {
        if (event.key != "Escape") {
            return;
        }
    }
    else if (event.type != "click") {
        return;
    }

    const elements = document.getElementsByClassName('modalWindows');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    document.removeEventListener("keydown", closeAllModals);
}


function openModalWindow(imgBlock){
    let divModal = document.createElement('div');
    divModal.className = 'modalWindows';
    let img = document.createElement('img');
    img.src = imgBlock.src;
    img.className = 'imgModel';
    divModal.appendChild(img);
    document.body.appendChild(divModal);
    
    document.addEventListener("keydown", closeAllModals);
    img.addEventListener("click", closeAllModals);
}



