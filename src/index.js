import LampsData from './LampsData';
import { createLampLayout } from './lampsLayout';
import './styles/main.scss';
import './styles/home.scss';

const lampsList = document.getElementById('lamps');
const lampsData = new LampsData();

function handleClick(e) {
    const id = e.currentTarget.id;
    lampsData.setActiveLamp(id);
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
    .catch(console.log);