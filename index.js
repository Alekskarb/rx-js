// import * as rxjs from "rxjs";
// import {take} from "rxjs";
// import {rxjs} from "rxjs";

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

// operator MAP =

// rxjs.interval(150)
// rxjs.of('hello', 'entire', 'world!')
//     .pipe(rxjs.map(
//         x => x.toUpperCase()
//     ), rxjs.take(10)).subscribe(
//     setSubscriber('map')
// )

rxjs.fromEvent(document.querySelector('input'), 'keyup')
    .pipe(
        // rxjs.map(x => x.target.value),
        rxjs.pluck('target', 'value'),
        rxjs.map(x => x.toUpperCase()),
        rxjs.map(x => {
            return {value: x, length: x.length}
        }))
    .subscribe(
        setSubscriber('map')
    )
