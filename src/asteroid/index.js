import { createClass } from 'asteroid';
const Asteroid = createClass();
const SERVER_IP = 'ws://tdbstaging.meteorapp.com/websocket';


const asteroid = new Asteroid({
    endpoint: SERVER_IP
});
window.asteroid=asteroid

export default asteroid;
