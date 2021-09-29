import LampsData from './LampsData';
import { createLampLayout } from './lampsLayout';
import { addButtonsListeners } from './darkLightModes';
import './styles/main.scss';
import './styles/home.scss';

const lampsList = document.getElementById('lamps');
export const lampsData = new LampsData();

function handleClick(e) {
    const id = e.currentTarget.id;

    lampsData.setActiveLamp(Number(id));

    const lamps = lampsData.getLamps();

    createLampLayout(lamps);
    addLampsListeners();
};

function addLampsListeners() {
    const lamps = lampsList.children;
    for (let i = 0; i < lamps.length; i++) {
        lamps[i].addEventListener('click', handleClick);
    }
};

lampsData
    .fetchLamps()
    .then(createLampLayout)
    .then(addLampsListeners)
    .then(addButtonsListeners)
    .catch(console.log);