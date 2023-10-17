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
// error Handling
// rxjs.throw(new Error('Something went wrong'))
rxjs.throwError(new Error('Something went wrong'))
    .pipe(rxjs.catchError(error => rxjs.of(error)))
    // .catch()
    // .subscribe(x => {
    //     console.log(x)
    // } )
    .subscribe(setSubscriber('catch'))

// rxjs.interval(500).pipe(rxjs.take(5)).subscribe(setSubscriber('interval'))

const s1$ = rxjs.throwError(new Error('Something went wrong'))
const s2$ = rxjs.interval(500).pipe(rxjs.take(2))

// rxjs.pipe(s1$.onErrorResumeNext(s2$))
rxjs.onErrorResumeNext(s1$, s2$)
    .subscribe(setSubscriber('onErrorResumeNext'))
