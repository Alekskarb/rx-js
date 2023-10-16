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
const cars = [
    {name: 'audi', price: 40000},
    {name: 'volvo', price: 30000},
    {name: 'seat', price: 20000},
]

rxjs.fromEvent(document.querySelector('input'), 'keyup')
    .pipe(rxjs.map(e => e.target.value))
    .subscribe( x => rxjs.from(cars)
            .pipe(rxjs.filter(car => car.name === x))
            .subscribe(v => {
                document.querySelector('div').innerHTML = `<h2>${v.name.toUpperCase()}</h2><h4>${v.price}</h4>`
            })
        // setSubscriber('filter')
    )

 rxjs.fromEvent(document.querySelector('input'), 'keyup')
    .pipe(rxjs.map(e => e.target.value),
        // rxjs.debounceTime(1000)
        rxjs.distinct()
    )
     .subscribe(setSubscriber('debounceTime'))

rxjs.from([1,2,3,4,4,4,45,8,9,87, 'keyup'])
    .pipe(rxjs.distinctUntilChanged())
     .subscribe(setSubscriber('debounceTime'))
