/**
 * Taken from: https://v6.angular.io/guide/testing
 */
import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { ComponentFixture } from '@angular/core/testing';
import { ReplaySubject } from 'rxjs';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
    // Use a ReplaySubject to share previous values with subscribers
    // and pump new values into the `paramMap` observable
    private subject = new ReplaySubject<ParamMap>();

    constructor(initialParams?: Params) {
        this.setParamMap(initialParams);
    }

    /** The mock paramMap observable */
    readonly paramMap = this.subject.asObservable();

    /** Set the paramMap observables's next value */
    setParamMap(params?: Params) {
        this.subject.next(convertToParamMap(params));
    }
}

export function stabiliser<T>(fixture: ComponentFixture<T>) {
    return (ticks: number = 1) => stabilise(fixture, ticks);
}

async function stabilise<T>(fixture: ComponentFixture<T>, ticks: number = 1) {
    for (let i = 0; i < ticks; i++) {
        await fixture.whenStable();
        fixture.detectChanges();
    }
}
