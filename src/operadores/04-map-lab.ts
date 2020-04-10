import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const texto = document.createElement('div');
texto.innerHTML= `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices arcu nisl, vulputate pharetra velit tempor at. Aenean condimentum congue nibh, in ultricies enim facilisis sed. Maecenas ac fermentum eros. Integer vitae risus ac quam volutpat rhoncus at sed nibh. Ut et tellus vulputate, semper enim quis, mattis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam tristique facilisis lobortis. Integer quis augue lectus.
<br><br>
Integer porttitor interdum eros ut placerat. Donec eu maximus metus. Mauris nec sem mollis, eleifend sem maximus, feugiat lectus. Nunc vel fringilla ipsum. Nulla eleifend lorem vel augue vehicula lacinia. Donec et neque ut sem porttitor cursus. Praesent gravida, turpis vitae tempor vestibulum, nisl mi tincidunt turpis, id viverra nisl magna non ante. Duis aliquam bibendum leo sit amet lobortis. Mauris nec ullamcorper odio.
<br><br>
Sed porttitor porttitor bibendum. Fusce ultrices velit magna, nec blandit libero volutpat ut. Mauris varius elit vestibulum leo aliquam iaculis id nec augue. Quisque ultricies vel leo non tempor. Curabitur laoreet sagittis justo, id varius libero faucibus sit amet. Mauris malesuada interdum elit, non sagittis ipsum consectetur sit amet. Mauris dapibus faucibus enim ut laoreet. Cras at tellus at nibh sagittis luctus et nec metus. Pellentesque volutpat urna lacus, eu semper ipsum consectetur ut. Fusce tellus metus, mattis ut quam non, tempor tincidunt turpis. Phasellus finibus libero eget urna accumsan vestibulum. Vestibulum hendrerit aliquet nibh a cursus.
<br><br>
Phasellus rhoncus viverra lacus, in bibendum augue tincidunt at. Sed ut risus velit. Morbi consequat vitae nibh placerat aliquam. Fusce lacus lacus, vehicula in dictum quis, pharetra tempor sapien. Curabitur eget sem malesuada sem tempor consequat. Proin in nunc ac sapien molestie maximus sit amet placerat nulla. Nunc mollis, sem ac volutpat lacinia, tellus erat varius dolor, nec auctor risus dui sed metus.
<br><br>
Mauris non felis egestas, lacinia ex sit amet, ornare sem. Aenean sit amet magna id felis bibendum tristique nec quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tincidunt elit pretium varius interdum. Curabitur a mollis lorem. Quisque et laoreet dui, eu fringilla urna. Donec placerat bibendum nisl lobortis tincidunt. 
<br><br>
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar= document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

//funcion que calcule.
const calculoScroll = ( event ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop/(scrollHeight-clientHeight))*100;
}

//suscribirse al scroll
const scroll$= fromEvent(document, 'scroll');
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    // map( event => calculoScroll( event ))
    map(calculoScroll),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
})