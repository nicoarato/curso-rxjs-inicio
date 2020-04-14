import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';


const click$= fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    debounceTime(2000)
);
// .subscribe(console.log)


//ejemplo2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>( input, 'keyup');
input$.pipe(
    debounceTime(1000),
   pluck('target','value'),
   distinctUntilChanged()
).subscribe(console.log)