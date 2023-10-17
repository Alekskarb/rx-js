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

rxjs.of('Hello ').subscribe(x => {
    rxjs.of(x + 'World1!').subscribe(setSubscriber('mergeMap'))
})
// ALTernative

rxjs.of('Hello ')
    .pipe(rxjs.mergeMap(x => {
        return rxjs.of(x + 'World2!')
    }))
    .subscribe(setSubscriber('mergeMap'))

const promise = (data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data + ' wish me luck');
        }, 2000)
    })
}

rxjs.of('WFM')
    .pipe(rxjs.mergeMap((x) => {
        return promise(x)
    })).subscribe(setSubscriber('promise'))

rxjs.range(1,10)
    .pipe(rxjs.concatMap((x, index) => {
        return rxjs.interval(200).pipe(
            rxjs.take(x),
            rxjs.map(i => index)
        )}
    )).subscribe(setSubscriber('concatMap'))
