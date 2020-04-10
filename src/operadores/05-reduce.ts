import { interval } from 'rxjs';
import { take, tap, reduce } from 'rxjs/operators';
const nums = [1,2,3,4,5];

const totalReducer = (acum: number, actual: number) => {
    return acum + actual;
}

const total = nums.reduce( totalReducer, 0);
console.log('Total: ', total);

interval(1000).pipe(
    take(4),
    tap(console.log),
    reduce( totalReducer )
).subscribe({
    next: val => console.log('next: ' , val),
    complete: () => console.log('Complete')
})