console.log(rxjs)

const stream$ = rxjs.Observable.create(observer => {
    observer.next('One');
    setTimeout(() => {
        // observer.next('After 4 sec!');
        observer.error('After 4 sec - ERROR!');

    }, 4000)
    setTimeout(() => {
        observer.next('After 2 sec!');

    }, 2000)
    // observer.complete();
    observer.next('Two');
})

stream$.subscribe(
    data => {console.log('Subscribe: ', data)},
    error => {console.log('Error: ', error)},
    complete => {console.log('Complete: ', complete)}
)
// const stream$ = rxjs.Observable
// const {Observable} = require('rxjs') //second way
// const wrapArrayIntoObservable = arr => {
//     return new stream$(subscriber => {
//         for(let item of arr) {
//             subscriber.next(item);
//         }
//     });
// }
// const data = [1, 2, 3, 4, 5];
// const observable = wrapArrayIntoObservable(data);
// observable.subscribe(val => console.log('Subscriber 1: ' + val));
// observable.subscribe(val => console.log('Subscriber 2: ' + val));
