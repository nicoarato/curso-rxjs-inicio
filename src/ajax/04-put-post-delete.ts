import { ajax } from 'rxjs/ajax';


const url = 'http://httpbin.org/delay/1';

// ajax.post( url, {
//     id: 1,
//     nombre: 'Federico'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

ajax({
    url,
    method: 'GET',
    headers: {
        'mi-token': 'ABCDE'
    },
    body: {
        id: 1,
        nombre: 'Fernando'
    }
}).subscribe(console.log)