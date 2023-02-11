
const ITEMS_CONTAINER = document.getElementsByClassName('contentSlider')[0];

function getProductItem(picture, name, price) {
    let divParent = document.createElement('div');
    divParent.className = 'slide';

    let pictureBlock = document.createElement('img');
    pictureBlock.src = picture;
    pictureBlock.className = 'stylePicture';

    let namesBlock = document.createElement('P');
    namesBlock.textContent = name;
    namesBlock.className = 'styleNames';

    divParent.appendChild(pictureBlock);
    divParent.appendChild(namesBlock);

    return divParent;
}

function clearSlider() {
    const sliders = document.querySelectorAll('.slide');
    sliders.forEach(slide => {
        slide.remove();
    });
}

//НАЧАЛО

class Project {

    constructor(picture, name) {
        this.picture = picture;
        this.name = name;
        this.printInfo()
   
    }

    setPicture(picture) {
        this.picture = picture;
    }

    setName(name) {
        this.name = name;
    }

    addInfo(picture, name) {
        this.picture = picture;
        this.name = name;
    }

    printInfo() {
   
    }

}


let picture = ['img/lash.png', 'img/toDoList.png', 'img/JSGame.png'];
let names = ['Сайт для мастера по ресницам!', 'Сайт для создания списка дел!', 'Старая добрая игра Dino!'];

let project1 = new Project('1', '2');
project1.setName("Сайт для мастера по ресницам!")
project1.printInfo()

let project2 = new Project('3', '3');
project2.setName("Сайт для мастера!")
project2.printInfo()

let sliderArray = new Array();


//процесс поиска и синхронизации
let index = 1;
if ( index < 0){
    index = picture.length - 1
} else if (index == picture.length){
    index = 0;
}


for (let idx = 0; idx < picture.length; idx++) {
    sliderArray.push(getProductItem(picture[idx], names[idx]))
}


//КНОПКИ
//кнопка возврата
let leftButton = document.getElementById('leftButton');
leftButton.className = 'button';

leftButton.addEventListener('click', () => {

    clearSlider()

    index = --index;

    if ( index < 0){
        index = picture.length - 1
    }

    ITEMS_CONTAINER.appendChild(sliderArray[index]);
    
})


//кнопка переключения
let rightButton = document.getElementById('rightButton');
rightButton.className = 'button';

rightButton.addEventListener('click', () => {

    clearSlider()

    index = ++index;
    if (index >= picture.length){
        index = 0;
    }

    ITEMS_CONTAINER.appendChild(sliderArray[index]);
    
    
})

ITEMS_CONTAINER.appendChild(sliderArray[index]);
//КОНЕЦ

 
