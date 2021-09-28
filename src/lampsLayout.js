import { handleClick } from '.';

const lampList = document.getElementById('description');
const lampImage = document.getElementById('lamp');
const lamps = document.getElementById('lamps');

function createLampLayout(arr) {
    let listMarkup = '';
    let lampsMarkup = '';
    let imageMarkup = '';

    function createMarkup(lamp, index) {

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

            imageMarkup += `<div class="home__main-lamp">
                            <img src="${lamp.image}" alt="lamp">
                        </div>`
        } else {
            lampsMarkup += `<div id=${lamp.id}>
                            <img src="${lamp.image}">
                        </div>`;
        };
    };
        
    arr.forEach(createMarkup);

    console.log(arr);
    lampList.innerHTML = listMarkup;
    lampImage.innerHTML = imageMarkup;
    lamps.innerHTML = lampsMarkup;
};

export {
    createLampLayout,
};