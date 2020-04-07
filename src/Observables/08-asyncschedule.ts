import { asyncScheduler } from 'rxjs';


// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Holamundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

//emulando setTimeout
// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Nico');

//emulando setInterval
//no puede ser una arrow function

const subs = asyncScheduler.schedule( function(state) {
    
    console.log('state', state);
    
    this.schedule(state +1 , 1000);

}, 2000, 0);

/* setTimeout(() => {
    subs.unsubscribe(); //se corta ese bucle.
}, 6000); */

asyncScheduler.schedule( () => subs.unsubscribe(), 6000);