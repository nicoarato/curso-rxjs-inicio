import { of, from} from 'rxjs';

/**
 * of toma arg y genera una secuencia
 * from = array, promise, iterable, observable...
 * 
 * 
 */


 const observer = {
     next: val => console.log('next:', val),
     complete: () => console.log('Completado')
 };

//  const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

// const source$ = from('fernando');
//const source$ = of('fernando');

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for(let id of miIterable){
//     console.log(id);
// }

from(miIterable).subscribe( observer );



//  source$.subscribe( observer);

/* 
const source$ = from( fetch('https://api.github.com/users/klerith'));
source$.subscribe( async(resp) => {
    console.log(resp);

    const data = await resp.json()
    console.log(data);
}); */

