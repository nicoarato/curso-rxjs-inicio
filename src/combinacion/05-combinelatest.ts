import { fromEvent, merge, combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';


// const keyUp$ = fromEvent( document, 'keyup');
// const click$ = fromEvent( document, 'click');

// combineLatest(
//     keyUp$.pipe(pluck('type')),
//     click$.pipe(pluck('type'))
//     )
// .subscribe(console.log); 

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '*********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);


//helper
const getInputStram = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        pluck<KeyboardEvent, string>('target','value')
    )
}


combineLatest(
    getInputStram(input1),
    getInputStram(input2)
).subscribe(console.log)