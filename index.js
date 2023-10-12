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
const arrObj = [
    {id: 1, name: 'alex'},
    {id: 1, name: 'tania'},
    {id: 1, name: 'pavel'},
    {id: 1, name: 'illya'}
]
// const set = new Set([1,2,3,'4', {id:0}])
const set = new Map([[1,2], [3,4], ['5','6']])

// rxjs.from([1,3,5,7,9])
// rxjs.from(arrObj)
rxjs.from(set)
    .subscribe(setSubscriber('from'))
