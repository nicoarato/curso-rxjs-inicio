import {  Observable, Subscriber, Observer  } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('next:', value),
    error: error=> console.warn('error:', error),
    complete: () => console.info('Complete')

};


const intervalo$ = new Observable<number>( subs => {
    //crear un contador.
    let cont = 0;
    const inter = setInterval( () => {
        cont++; 
        
        subs.next(cont);

        
    }, 1000);

    setTimeout( () => {
        subs.complete();
    }, 2500)

    return () => {
        clearInterval(inter);
        console.log('Intervalo destruido.');
    }
});

const subs1 = intervalo$.subscribe( observer);
 const subs2 = intervalo$.subscribe( observer);
 const subs3 = intervalo$.subscribe( observer);

subs1.add( subs2)
     .add( subs3);
    //aca no se ejecuta el complete de 2 y 3

setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('Completado el Timeout...')
},6000);