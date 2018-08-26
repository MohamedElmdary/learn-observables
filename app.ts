import { Observable } from './Observable.ts';
import { map, filter } from './Operators.ts';

const source1 = Observable.of(1, 2, 3, 4);

source1
    .pipe(
        map(val => val * 2),
        map(v => v * 5),
        filter(v => v > 5 && v < 15)
    )
    .subscribe(
        data => console.log(`source1 #1 => ${data}`),
        err => console.log(err)
    )

source1
    .pipe(
        filter(v => v%2 === 0)
    )
    .subscribe(
        data => console.log(`source1 #2 => ${data}`),
        err => console.log(err)
    )

const source2 = Observable.range(15);

source2
    .pipe(
        map(v => v + 3.5)
    )
    .subscribe(
        data => console.log(`source2 #1 => ${data}`),
        err => console.log(err)
    )

source2
    .subscribe(
        data => console.log(`source2 #2 => ${data}`),
        err => console.log(err)
    )