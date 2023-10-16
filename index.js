// const {take} = require("rxjs");
// import {concat, interval, take} from "rxjs";

const setSubscriber = (operatorName) => {
    return {
        next(x) {
            console.log(`${operatorName}: `, x)
        },
        error(err) {
            console.log('Error: ', err)
        },
        complete() {
            console.log(`${operatorName}: Completed.`)
        }
    }
}

const stream1$ = rxjs.of('Hello')
const stream2$ = rxjs.of('World')

const stream3$ = rxjs.interval(1000).pipe(rxjs.map(e => "Stream3: " + e))
const stream4$ = rxjs.interval(500).pipe(rxjs.map(e => "Stream4: " + e))

stream1$.pipe(
    rxjs.mergeWith(stream2$))
    .subscribe(setSubscriber('merge'))

// rxjs.mergeWith(stream3$, stream4$).pipe(rxjs.take(12))
//     .subscribe(setSubscriber('merges'))

rxjs.range(1,3).pipe(
    rxjs.map(x => rxjs.range(1,3)),
    rxjs.mergeAll())
    .subscribe(setSubscriber('mergeAll'))

const timer1 = rxjs.interval(1000).pipe(rxjs.take(10));
const timer2 = rxjs.interval(2000).pipe(rxjs.take(6));
const timer3 = rxjs.interval(500).pipe(rxjs.take(10));

const result = rxjs.concat(timer1, timer2, timer3);
result.subscribe(x => console.log(x));

const stream5$ = rxjs.from(['Hello'])
const stream6$ = rxjs.from(['World'])
stream6$.pipe(
//     rxjs.concat(stream5$, stream6$)
rxjs.concatWith(stream5$))
    .subscribe(setSubscriber('concat'))
