/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NgxSpinner, PRIMARY_SPINNER } from './ngx-spinner.enum';
import * as i0 from "@angular/core";
export class NgxSpinnerService {
    /**
     * Creates an instance of NgxSpinnerService.
     * \@memberof NgxSpinnerService
     */
    constructor() {
        /**
         * Spinner observable
         *
         * \@memberof NgxSpinnerService
         */
        this.spinnerObservable = new Subject();
    }
    /**
     * Get subscription of desired spinner
     * \@memberof NgxSpinnerService
     *
     * @param {?} name
     * @return {?}
     */
    getSpinner(name) {
        return this.spinnerObservable.asObservable().pipe(filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => x && x.name === name)));
    }
    /**
     * To show spinner
     *
     * \@memberof NgxSpinnerService
     * @param {?=} name
     * @param {?=} spinner
     * @return {?}
     */
    show(name = PRIMARY_SPINNER, spinner) {
        /** @type {?} */
        const showPromise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (spinner && Object.keys(spinner).length) {
                spinner['name'] = name;
                this.spinnerObservable.next(new NgxSpinner(Object.assign({}, spinner, { show: true })));
                resolve(true);
            }
            else {
                this.spinnerObservable.next(new NgxSpinner({ name, show: true }));
                resolve(true);
            }
        }));
        return showPromise;
    }
    /**
     * To hide spinner
     *
     * \@memberof NgxSpinnerService
     * @param {?=} name
     * @return {?}
     */
    hide(name = PRIMARY_SPINNER) {
        /** @type {?} */
        const hidePromise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.spinnerObservable.next(new NgxSpinner({ name, show: false }));
            resolve(true);
        }));
        return hidePromise;
    }
}
NgxSpinnerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxSpinnerService.ctorParameters = () => [];
/** @nocollapse */ NgxSpinnerService.ngInjectableDef = i0.defineInjectable({ factory: function NgxSpinnerService_Factory() { return new NgxSpinnerService(); }, token: NgxSpinnerService, providedIn: "root" });
if (false) {
    /**
     * Spinner observable
     *
     * \@memberof NgxSpinnerService
     * @type {?}
     * @private
     */
    NgxSpinnerService.prototype.spinnerObservable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL25neC1zcGlubmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQVcsTUFBTSxvQkFBb0IsQ0FBQzs7QUFLMUUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFXNUI7Ozs7OztRQUxRLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFjLENBQUM7SUFLdEMsQ0FBQzs7Ozs7Ozs7SUFLakIsVUFBVSxDQUFDLElBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDOzs7Ozs7Ozs7SUFNRCxJQUFJLENBQUMsT0FBZSxlQUFlLEVBQUUsT0FBaUI7O2NBQzlDLFdBQVcsR0FBRyxJQUFJLE9BQU87Ozs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbEQsSUFBSSxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLG1CQUFNLE9BQU8sSUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFHLENBQUMsQ0FBQztnQkFDeEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtRQUNILENBQUMsRUFBQztRQUNGLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7O0lBTUQsSUFBSSxDQUFDLE9BQWUsZUFBZTs7Y0FDM0IsV0FBVyxHQUFHLElBQUksT0FBTzs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUMsRUFBQztRQUNGLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7OztZQW5ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7Ozs7SUFPQyw4Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOZ3hTcGlubmVyLCBQUklNQVJZX1NQSU5ORVIsIFNwaW5uZXIgfSBmcm9tICcuL25neC1zcGlubmVyLmVudW0nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hTcGlubmVyU2VydmljZSB7XG4gIC8qKlxuICAgKiBTcGlubmVyIG9ic2VydmFibGVcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIHNwaW5uZXJPYnNlcnZhYmxlID0gbmV3IFN1YmplY3Q8Tmd4U3Bpbm5lcj4oKTtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTmd4U3Bpbm5lclNlcnZpY2UuXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgLyoqXG4gICogR2V0IHN1YnNjcmlwdGlvbiBvZiBkZXNpcmVkIHNwaW5uZXJcbiAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgKiovXG4gIGdldFNwaW5uZXIobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxOZ3hTcGlubmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuc3Bpbm5lck9ic2VydmFibGUuYXNPYnNlcnZhYmxlKCkucGlwZShmaWx0ZXIoKHg6IE5neFNwaW5uZXIpID0+IHggJiYgeC5uYW1lID09PSBuYW1lKSk7XG4gIH1cbiAgLyoqXG4gICAqIFRvIHNob3cgc3Bpbm5lclxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgICovXG4gIHNob3cobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSLCBzcGlubmVyPzogU3Bpbm5lcikge1xuICAgIGNvbnN0IHNob3dQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHNwaW5uZXIgJiYgT2JqZWN0LmtleXMoc3Bpbm5lcikubGVuZ3RoKSB7XG4gICAgICAgIHNwaW5uZXJbJ25hbWUnXSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3Bpbm5lck9ic2VydmFibGUubmV4dChuZXcgTmd4U3Bpbm5lcih7IC4uLnNwaW5uZXIsIHNob3c6IHRydWUgfSkpO1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zcGlubmVyT2JzZXJ2YWJsZS5uZXh0KG5ldyBOZ3hTcGlubmVyKHsgbmFtZSwgc2hvdzogdHJ1ZSB9KSk7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNob3dQcm9taXNlO1xuICB9XG4gIC8qKlxuICAqIFRvIGhpZGUgc3Bpbm5lclxuICAqXG4gICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICovXG4gIGhpZGUobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSKSB7XG4gICAgY29uc3QgaGlkZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnNwaW5uZXJPYnNlcnZhYmxlLm5leHQobmV3IE5neFNwaW5uZXIoeyBuYW1lLCBzaG93OiBmYWxzZSB9KSk7XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBoaWRlUHJvbWlzZTtcbiAgfVxufVxuIl19