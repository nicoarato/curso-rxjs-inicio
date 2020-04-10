import { range, interval, from, fromEvent} from 'rxjs';
import { filter, map } from 'rxjs/operators'; 

// range(20,30).pipe(
//     filter((val, index) => {
//         console.log('index: ', index);
//         return val % 2 == 0})
// ).subscribe(console.log);

interface Personaje {
    tipo: String,
    nombre: String
}
const personajes: Personaje[] = [

    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Superman'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];


from(personajes).pipe(

    filter( p => p.tipo == 'heroe' )

).subscribe(console.log)

const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map( event => event.code ), //KeyboardEvent , string
    filter(key => key == 'Enter') //string, string
);

keyUp$.subscribe(console.log);