import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';


const numeros$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x','y','z'),

);

numeros$.subscribe(
   { next: val => console.log('next:',val),
    error: err => console.warn('error: ', err),
    complete: ()=> console.log('complete')}
    )