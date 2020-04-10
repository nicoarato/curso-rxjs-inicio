import { interval, from } from 'rxjs';
import { scan, reduce, map } from 'rxjs/operators';

const nums = [1,2,3,4,5];

const totalAcc = (acc, cur) => acc+cur;


///Reduce
from(nums).pipe(
    reduce(totalAcc,0 )
).subscribe(console.log)

///scan
from(nums).pipe(
    scan(totalAcc,0 )
).subscribe(console.log)


// interval(1000).pipe(
//     scan((acc, val) => val+acc, 0)
// ).subscribe(console.log)


//Redux
interface Usuario {
    id?: string;
    auth?: boolean;
    token?: string;
    edad?: number;
}

const user:Usuario[] = [
    {id: 'foka', auth: false, token: null},
    {id: 'foka', auth: true, token: 'abc'},
    {id: 'foka', auth: false, token: '123'},
];

const state$ = from(user).pipe(
    scan<Usuario>( (acc, cur) => {
        return {...acc, ...cur}
    }, {edad: 33 })
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log)