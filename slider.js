
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

let picture = ['img/lash.png', 'img/toDoList.png', 'img/JSGame.png'];
let names = ['Сайт для мастера по ресницам!', 'Сайт для создания списка дел!', 'Старая добрая игра Dino!'];

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
