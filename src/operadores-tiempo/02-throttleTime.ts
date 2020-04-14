

import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';


const click$= fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    throttleTime(2000)
)//.subscribe(console.log)


//ejemplo2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>( input, 'keyup');
input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
   pluck('target','value'),
   distinctUntilChanged()
).subscribe(console.log)