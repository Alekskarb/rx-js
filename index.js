// const {rxjs} = require('rxjs')
// import * as rxjs from 'rxjs';
// import { of, interval, take, timer } from 'rxjs';

const setSubscriber = (operatorName) => {
    return {
        next(x) {
        console.log(`${operatorName}: `, x)},
    error(err) {
        console.log('Error: ', err)},
        complete(){
            console.log(`${operatorName}: Completed.`)}
    }
}

// rxjs.of(4,2,3,7,0,'6',22,'str', [11,22,33])
//     .subscribe(setSubscriber('of'))

// rxjs.interval(100)
//     .pipe(rxjs.take(10))
//     .subscribe(setSubscriber('interval'))

// rxjs.timer(2000, 100)
//     .pipe(rxjs.take(10))
//     .subscribe(setSubscriber('timer'))

rxjs.range(5, 15)
    .pipe(rxjs.take(10))
    .subscribe(setSubscriber('range'))

// const btn = document.querySelector('button');
// const input = document.querySelector('input');
// const button$ = rxjs.fromEvent(btn,'click')
// const input$ = rxjs.fromEvent(input,'keydown')
// const document$ = rxjs.fromEvent(document,'mousemove')

// button$.subscribe(e => {console.log(e)})
// input$.subscribe(e => {console.log(e)})
// document$.subscribe(e => {
//     document.querySelector('h2').innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`})
