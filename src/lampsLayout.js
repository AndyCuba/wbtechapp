import { lampsData } from '.';
import { createLightImg } from './darkLightModes';

const lampList = document.getElementById('description');
const lamps = document.getElementById('lamps');

function createLampLayout(lampsArr) {
    const lampImage = document.getElementById('lamp');

    let listMarkup = '';
    let lampsMarkup = '';
    let imageMarkup = '';

    function createMarkup(lamp, index) {
        const isModeDark = lampsData.getDarkMode();
        const activeLamp = lampsData.getActiveLamp();

        if (lamp.isActive) {
            listMarkup += `
                <div class="home__main-lamplist-oval">
                    <p id="material">
                        <span>Material:</span> 
                         ${lamp.material[0].toUpperCase() + lamp.material.slice(1)}
                    </p>
                    <p><span>Dimensions (cm):</span> H 33 x W 15 x D 15</p>
                    <p id="weight">
                        <span>Net Weight:</span>
                         ${lamp.weight} kg
                    </p>
                    <p id="electrification">
                        <span>Electirfication:</span><br/> 
                         ${lamp.electrification.split(',').join(' |')}
                    </p>
                </div>
                <div class="home__main-lamplist-lamp">
                    <img id="addLamp" src="${lamp.image}">
                </div>`;

            lampsMarkup += `<div class="active-lamp" id=${lamp.id}>
                            <img src="${lamp.image}">
                        </div>`;

            //If chair img is dark, change it to light img
            if (isModeDark) {
                createLightImg(activeLamp);
            } else {
                imageMarkup += `<img src="${lamp.image}" alt="lamp">`;
            };

        } else {
            lampsMarkup += `<div id=${lamp.id}>
                            <img src="${lamp.image}">
                        </div>`;
        };
    };
        
    lampsArr.forEach(createMarkup);

    lampList.innerHTML = listMarkup;
    lamps.innerHTML = lampsMarkup;
    if (lampImage) lampImage.innerHTML = imageMarkup;
};

function updateLampLayout(lampsArr) {
    const materialText = document.getElementById('material').childNodes[2];
    const weightText = document.getElementById('weight').childNodes[2];
    const electrificationText = document.getElementById('electrification').childNodes[3];
    const addLamp = document.getElementById('addLamp');
    const mainLamp = document.getElementById('lamp')?.children[0];
    const lampsList = document.getElementById('lamps').children;

    function updateMarkup(lamp) {
        const isModeDark = lampsData.getDarkMode();
        const activeLamp = lampsData.getActiveLamp();

        if (lamp.isActive) {
            //Update text nodes
            materialText.textContent = " " + lamp.material[0].toUpperCase() + lamp.material.slice(1);
            weightText.textContent = " " + lamp.weight;
            electrificationText.textContent = " " + lamp.electrification.split(',').join(' |');

            addLamp.src = lamp.image;

            //If mode is dark creates new lamp image else if HTML has lamp, changes it's source
            if (isModeDark) {
                createLightImg(activeLamp);
            } else {
                mainLamp.src = lamp.image;
            };

            // Change active lamp
            for (let i = 0; i < lampsList.length; i++) {

                if (lamp.id === Number(lampsList[i].id)) {
                    lampsList[i].classList.add('active-lamp');
                } else {
                    lampsList[i].classList.remove('active-lamp');
                };         
            }


        }
    }

    lampsArr.forEach(updateMarkup);
};

export {
    createLampLayout,
    updateLampLayout,
};