import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';


const numeros$ = of( 1,1,1,3,3,3,2,4,5,6,3,1 );
numeros$.pipe(
    // distinct()// USA === OJO
    distinctUntilChanged()// USA === OJO
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
})

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr Wally'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
];

from( personajes).pipe(
    // distinct( p => p.nombre) //para objetos.
    distinctUntilChanged((ant, act) => ant.nombre===act.nombre) //para objetos.
).subscribe( console.log );