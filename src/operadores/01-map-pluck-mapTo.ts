import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// range(1,5).pipe(
//     map<number, string>( val => {
//         return (val * 10).toString();
//     } )
// )
// .subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupEvent$ = keyup$.pipe(
    map(event => event.code)
);

const keyUpPluck$= keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyUpMapTo$= keyup$.pipe(
    mapTo('Tecla presionada')
);

keyup$.subscribe( console.log)
//keyup$.subscribe(val => console.log('map', val))
keyupEvent$.subscribe(val => console.log('map', val))
keyUpPluck$.subscribe(val => console.log('pluck', val))
keyUpMapTo$.subscribe(val => console.log('mapTo', val))

