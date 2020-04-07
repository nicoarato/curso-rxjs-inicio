import { interval, timer } from 'rxjs';

const obs = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

const interval$ = interval(1000)
// const timer$ =timer(2000)
// const timer$ =timer(2000,1000); //interval que inicia a los 2seg

const hoyEn5 = new Date();//ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5);

const timer$ =timer( hoyEn5 )


console.log('Inicio');
// interval$.subscribe(obs);
timer$.subscribe( obs);
console.log('Fin'); 