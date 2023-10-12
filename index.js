const btn = document.querySelector('button');
const input = document.querySelector('input');
// btn.addEventListener('click', (e) => {console.log(e)})
// const button$ = rxjs.Observable.create()
const button$ = rxjs.fromEvent(btn,'click')
const input$ = rxjs.fromEvent(input,'keydown')
const document$ = rxjs.fromEvent(document,'mousemove')

button$.subscribe(e => {console.log(e)})
input$.subscribe(e => {console.log(e)})
document$.subscribe(e => {
    document.querySelector('h2').innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`})
