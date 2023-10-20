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
// SUBJECTS
const subject$ = new rxjs.Subject();
// Example #1
// behaviour as Observable
subject$.subscribe(setSubscriber('subject'))

// behaviour as observer
subject$.next(1);
subject$.next(2);

setTimeout(() => {
    subject$.next(3);
    subject$.complete()
    },1000)
// subject$.complete()

const int$ = rxjs.interval(2000)
// behaviour as Observable
int$.subscribe(subject$)

//Example #2
// BEHAVIOUR-SUBJECTS
const behaviourSubj$ = new rxjs.BehaviorSubject('Behaviour');

// 1 - behaviour as Observable
behaviourSubj$.subscribe(setSubscriber('BehaviorSubject'))

// 2 - behaviour as observer
behaviourSubj$.next('Subject');
// behaviourSubj$.next(2);

//Example #3
// REPLAY-SUBJECTS
const replaySubj$ = new rxjs.ReplaySubject(2);
// 1 - behaviour as observers
replaySubj$.next(1);
replaySubj$.next(2);
replaySubj$.next(3);
// replaySubj$.complete()

// 2 - behaviour as Observable !!!
replaySubj$.subscribe(setSubscriber('ReplaySubject'))

//Example #4
// REPLAY-SUBJECTS
const asyncSubject$ = new rxjs.AsyncSubject (2);
// 1 - behaviour as observers
asyncSubject$.next(1);
asyncSubject$.next(2);
asyncSubject$.next('message');
asyncSubject$.complete()

// 2 - behaviour as Observable !!!
asyncSubject$.subscribe(setSubscriber('AsyncSubject'))


