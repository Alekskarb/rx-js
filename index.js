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

rxjs.of()
    .pipe(rxjs.defaultIfEmpty('Some mess')
    ).subscribe(setSubscriber('defaultIfEmpty'))

// rxjs.from([1,2,3,4,5])
rxjs.range(1, 3)
    // .pipe(rxjs.every(el => el % 2 === 0)
    // .pipe(rxjs.tap(el => console.log(el)),
    .pipe(rxjs.map(x => x * x),
        // rxjs.delay(1000)
    ).subscribe(setSubscriber('every'))


rxjs.range(1, 3)
    // .pipe(rxjs.every(el => el % 2 === 0)
    // .pipe(rxjs.tap(el => console.log(el)),
    // .map(x => x + x)
    .pipe(observer => observer.map(x => x * x)
    ).subscribe(setSubscriber('every'))
