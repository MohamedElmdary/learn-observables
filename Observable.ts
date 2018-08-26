import { noop } from './Helpers.ts';

export class Observable {
    constructor(private observer = noop) {}

    subscribe(next = noop, error = noop) {
        this.observer(next, error);
    }

    pipe = (...fns): Observable => {
        return new Observable((next, error) => {
            this.subscribe(
                v => {
                    let value = v;
                    for (let i = 0; i < fns.length; i++) {
                        value = fns[i](value);
                    }
                    try {
                        if (value) next(value);
                    } catch (err) {
                        error(err);
                    }
                }
            )
        })
    }

    static range(n1 = 0, n2?) {
        if (typeof(n2) === "undefined") {
            n2 = n1;
            n1 = 0;
        }
        return new Observable((next, error) => {
            for (let i = n1; i < n2; i++) {
                try {
                    next(i);
                } catch (err) {
                    error(err);
                }
            }
        });
    }

    static of(...args) {
        return new Observable((next, error) => {
            for (let i = 0; i < args.length; i++) {
                try {
                    next(args[i]);
                } catch (err) {
                    error(err);
                }
            } 
        });
    }

}

