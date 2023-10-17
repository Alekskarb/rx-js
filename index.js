// import Rx from "https://unpkg.com/rxjs@^7/dist/bundles/rxjs.umd.min.js";

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
//ZIP
const s1$ = rxjs.of('Hello ')
const s2$ = rxjs.of('World!')
const interval$ = rxjs.interval(1000);
const interval2$ = rxjs.interval(500).pipe(rxjs.take(3))

rxjs.zip(s1$, s2$).subscribe(
   setSubscriber('zip'));

// rxjs.zip(interval$, interval2$)
// ALTernative
// rxjs.zip(interval$, interval$.pipe(rxjs.take(3)))
rxjs.zip(interval$, interval$.pipe(rxjs.take(3)), rxjs.of('wfm'))
    .subscribe(
        setSubscriber('zip'))

const int1$ = rxjs.interval(1000);
const int2$ = rxjs.interval(500);

// withLatestFrom
// const result = clicks.pipe(withLatestFrom(timer));
int1$.pipe(rxjs.withLatestFrom(int2$), rxjs.take(5))
    .subscribe(setSubscriber('withLatestFrom'))

// combineLatest
const timer1$ = rxjs.timer(1000, 2000);
const timer2$ = rxjs.timer(2000, 2000);
const timer3$ = rxjs.timer(3000, 2000);

rxjs.combineLatest(timer1$,timer2$,timer3$).pipe(rxjs.take(5))
    .subscribe(setSubscriber('combineLatest'))
