import { lampsData } from ".";
import { createLightImg } from "./darkLightModes";

const lampList = document.getElementById('description');
const lamps = document.getElementById('lamps');

function createLampLayout(arr) {
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
                    <p><span>Material:</span> ${lamp.material[0].toUpperCase() + lamp.material.slice(1)}</p>
                    <p><span>Dimensions (cm):</span> H 33 x W 15 x D 15</p>
                    <p><span>Net Weight:</span> ${lamp.weight} kg</p>
                    <p><span>Electirfication:</span><br/> ${lamp.electrification.split(',').join(' |')}</p>
                </div>
                <div class="home__main-lamplist-lamp">
                    <img src="${lamp.image}">
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
        
    arr.forEach(createMarkup);

    lampList.innerHTML = listMarkup;
    lamps.innerHTML = lampsMarkup;
    if (lampImage) lampImage.innerHTML = imageMarkup;
};

export {
    createLampLayout,
};