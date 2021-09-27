import LampsData from './LampsData';
import './styles/main.scss';
import './styles/home.scss';



const lampsData = new LampsData();

lampsData.fetchLamps().then(console.log);