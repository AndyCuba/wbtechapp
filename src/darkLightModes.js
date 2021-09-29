import { lampsData } from '.';
import chairDarkMedium from './assets/webp/chair-dark-medium.webp';
import chairDarkLarge from './assets/webp/chair-dark-large.webp';
import chairMedium from './assets/images/chair-medium.png';
import chairLarge from './assets/images/chair-large.png';

const buttonsContainer = document.querySelector('.home__main-lamplist-buttons');
const mainImage = document.querySelector('.home__main-image');

const dark = 'dark';
const light = 'light';

function createDarkImg() {
    
    const darkLayout = `<img
                            type="image/webp" 
                            srcset="${chairDarkMedium} 1x, ${chairDarkLarge} 2x"
                            alt="dark room with chair"
                        >`;
    
    mainImage.innerHTML = darkLayout;

    lampsData.toggleDarkMode();
};

function createLightImg(activeLamp) {

    const lightLayout = `<img
                            type="image/webp" 
                            srcset="${chairMedium} 1x, ${chairLarge} 2x"
                            alt="dark room with chair"
                        >
                        <div id="lamp">
                            <img src="${activeLamp.image}" alt="lamp">
                        </div>`;

    mainImage.innerHTML = lightLayout;

    lampsData.toggleDarkMode();
};

function changeMainImage(name) {
    const activeLamp = lampsData.getActiveLamp();

    if (name === dark) {

        if (activeLamp.isDarkMode) {
            createDarkImg();
        }

    } else if (name === light) {
        const isModeDark = lampsData.getDarkMode();
        
        if (isModeDark) {
            createLightImg(activeLamp);
        }

    };
};


function handleClick(e) {
    const name = e.currentTarget.name;

    if (name) {
        changeMainImage(name);
    }
};

function addButtonsListeners() {
    const buttons = buttonsContainer.children;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleClick);
    };
};

export {
    createLightImg,
    addButtonsListeners,
};