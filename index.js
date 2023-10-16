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

// rxjs.interval(500)
// .pipe(rxjs.buffer(rxjs.interval(2000)),
// // .pipe(rxjs.bufferTime(2000),
//     rxjs.take(4)
// ).subscribe(setSubscriber('buffer'))
//
// rxjs.range(0, 40)
//     .pipe(rxjs.bufferCount(10)
// ).subscribe(setSubscriber('bufferCount'))

rxjs.interval(500)
    .pipe(rxjs.buffer(rxjs.fromEvent(document, 'click'))
).subscribe(setSubscriber('bufferClick'))
