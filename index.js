// const { first } = rxjs;
// const { filter, map } = rxjs.operators;
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

// operator for CHOOSE

rxjs.of(1,42,3, '4', "Angular", true)
    .pipe(
        // rxjs.first(),
        // rxjs.last())
        // rxjs.find(el => el===3))
        // rxjs.findIndex(el => el=== 1))
        // rxjs.take(3))
        // rxjs.skip(3))
        rxjs.skipWhile(el => {
            return typeof el === 'number'
        }))
    .subscribe(
        setSubscriber('map')
    )

rxjs.interval(500)
    .pipe(
        rxjs.skipUntil(rxjs.timer(3000)),
        rxjs.takeUntil(rxjs.timer(5000)))
    .subscribe(
        setSubscriber('map')
    )