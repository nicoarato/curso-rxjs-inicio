import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
//crear un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

//helpers
const peticionHttpLogin = (userPass) => {
    return ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
        pluck('response', 'token'),
        catchError( err => of( 'ssss'))
    )
}


//configuraciones

inputEmail.type= 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type= 'password';
inputPass.placeholder = 'Password';
inputPass.value = '123456';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

//streams
const submitForm$ = fromEvent(form, 'submit')
        .pipe(
            tap( evt => evt.preventDefault() ),
            map(evt => ({
                email:evt.target[0].value,
                password:evt.target[1].value
            })),
            // switchMap( peticionHttpLogin )
            exhaustMap( peticionHttpLogin )
        );

submitForm$.subscribe(token => {
    console.log(token)
})