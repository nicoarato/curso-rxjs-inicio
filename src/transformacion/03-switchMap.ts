import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/githubuser.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';
const body = document.querySelector('body');
const inputText = document.createElement('input');
const orderList = document.createElement('ol');

body.append(inputText, orderList);

//helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    orderList.innerHTML = '';
    console.log(usuarios);

    for( const usuario of usuarios) {

        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

//streams
const input$ = fromEvent<KeyboardEvent>(inputText, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GithubUsersResp>>( texto => 
        ajax.getJSON(
            `https://api.github.com/search/users?q=${ texto }`
        )
    ),
    pluck<GithubUsersResp, GithubUser[]>('items')
);//.subscribe( mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    switchMap( texto => ajax.getJSON(url+texto))
).subscribe(console.log);