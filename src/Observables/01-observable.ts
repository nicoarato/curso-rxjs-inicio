import {  Observable, Subscriber, Observer  } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('siguiente', value),
    error: error=> console.warn('error [observer: ', error),
    complete: () => console.info('Completo- [observer]')

}

const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('mundo');

    //forzar un error
    /* const a = undefined;
    a.nombre = 'Carlos'; */

    subs.complete();

    subs.next('Hola');
    subs.next('mundo');


});

obs$.subscribe( observer );

/* obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.warn('error: ', error),
    () => console.log('Completado')
); */


