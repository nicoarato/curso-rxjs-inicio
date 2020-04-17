import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
//peticiones ajax de manera simulatanea.loading

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'nicoarato';


forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ).pipe(
        catchError(err => of(err))
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repofs`
    ).pipe(
        catchError(err => of(err))
    ),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gists`
    ).pipe(
        catchError(err => of(err))
    )
    })
    .pipe(
        catchError(err => of(err))
    ).subscribe(console.log)