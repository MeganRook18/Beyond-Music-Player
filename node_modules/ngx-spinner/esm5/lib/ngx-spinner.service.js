/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NgxSpinner, PRIMARY_SPINNER } from './ngx-spinner.enum';
import * as i0 from "@angular/core";
var NgxSpinnerService = /** @class */ (function () {
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    function NgxSpinnerService() {
        /**
         * Spinner observable
         *
         * \@memberof NgxSpinnerService
         */
        this.spinnerObservable = new Subject();
    }
    /**
    * Get subscription of desired spinner
    * @memberof NgxSpinnerService
    **/
    /**
     * Get subscription of desired spinner
     * \@memberof NgxSpinnerService
     *
     * @param {?} name
     * @return {?}
     */
    NgxSpinnerService.prototype.getSpinner = /**
     * Get subscription of desired spinner
     * \@memberof NgxSpinnerService
     *
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.spinnerObservable.asObservable().pipe(filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x && x.name === name; })));
    };
    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    /**
     * To show spinner
     *
     * \@memberof NgxSpinnerService
     * @param {?=} name
     * @param {?=} spinner
     * @return {?}
     */
    NgxSpinnerService.prototype.show = /**
     * To show spinner
     *
     * \@memberof NgxSpinnerService
     * @param {?=} name
     * @param {?=} spinner
     * @return {?}
     */
    function (name, spinner) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        /** @type {?} */
        var showPromise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (spinner && Object.keys(spinner).length) {
                spinner['name'] = name;
                _this.spinnerObservable.next(new NgxSpinner(tslib_1.__assign({}, spinner, { show: true })));
                resolve(true);
            }
            else {
                _this.spinnerObservable.next(new NgxSpinner({ name: name, show: true }));
                resolve(true);
            }
        }));
        return showPromise;
    };
    /**
    * To hide spinner
    *
    * @memberof NgxSpinnerService
    */
    /**
     * To hide spinner
     *
     * \@memberof NgxSpinnerService
     * @param {?=} name
     * @return {?}
     */
    NgxSpinnerService.prototype.hide = /**
     * To hide spinner
     *
     * \@memberof NgxSpinnerService
     * @param {?=} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        /** @type {?} */
        var hidePromise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.spinnerObservable.next(new NgxSpinner({ name: name, show: false }));
            resolve(true);
        }));
        return hidePromise;
    };
    NgxSpinnerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxSpinnerService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxSpinnerService.ngInjectableDef = i0.defineInjectable({ factory: function NgxSpinnerService_Factory() { return new NgxSpinnerService(); }, token: NgxSpinnerService, providedIn: "root" });
    return NgxSpinnerService;
}());
export { NgxSpinnerService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL25neC1zcGlubmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFXLE1BQU0sb0JBQW9CLENBQUM7O0FBRTFFO0lBVUU7OztPQUdHO0lBQ0g7Ozs7OztRQUxRLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFjLENBQUM7SUFLdEMsQ0FBQztJQUNqQjs7O09BR0c7Ozs7Ozs7O0lBQ0gsc0NBQVU7Ozs7Ozs7SUFBVixVQUFXLElBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLENBQWEsSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBcEIsQ0FBb0IsRUFBQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUNEOzs7O09BSUc7Ozs7Ozs7OztJQUNILGdDQUFJOzs7Ozs7OztJQUFKLFVBQUssSUFBOEIsRUFBRSxPQUFpQjtRQUF0RCxpQkFZQztRQVpJLHFCQUFBLEVBQUEsc0JBQThCOztZQUMzQixXQUFXLEdBQUcsSUFBSSxPQUFPOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDOUMsSUFBSSxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLHNCQUFNLE9BQU8sSUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFHLENBQUMsQ0FBQztnQkFDeEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmO1FBQ0gsQ0FBQyxFQUFDO1FBQ0YsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNEOzs7O01BSUU7Ozs7Ozs7O0lBQ0YsZ0NBQUk7Ozs7Ozs7SUFBSixVQUFLLElBQThCO1FBQW5DLGlCQU1DO1FBTkkscUJBQUEsRUFBQSxzQkFBOEI7O1lBQzNCLFdBQVcsR0FBRyxJQUFJLE9BQU87Ozs7O1FBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUM5QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxFQUFDO1FBQ0YsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Z0JBbkRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzRCQVBEO0NBeURDLEFBcERELElBb0RDO1NBakRZLGlCQUFpQjs7Ozs7Ozs7O0lBTTVCLDhDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5neFNwaW5uZXIsIFBSSU1BUllfU1BJTk5FUiwgU3Bpbm5lciB9IGZyb20gJy4vbmd4LXNwaW5uZXIuZW51bSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFNwaW5uZXJTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFNwaW5uZXIgb2JzZXJ2YWJsZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgICovXG4gIHByaXZhdGUgc3Bpbm5lck9ic2VydmFibGUgPSBuZXcgU3ViamVjdDxOZ3hTcGlubmVyPigpO1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBOZ3hTcGlubmVyU2VydmljZS5cbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICAvKipcbiAgKiBHZXQgc3Vic2NyaXB0aW9uIG9mIGRlc2lyZWQgc3Bpbm5lclxuICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAqKi9cbiAgZ2V0U3Bpbm5lcihuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5neFNwaW5uZXI+IHtcbiAgICByZXR1cm4gdGhpcy5zcGlubmVyT2JzZXJ2YWJsZS5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcigoeDogTmd4U3Bpbm5lcikgPT4geCAmJiB4Lm5hbWUgPT09IG5hbWUpKTtcbiAgfVxuICAvKipcbiAgICogVG8gc2hvdyBzcGlubmVyXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxuICAgKi9cbiAgc2hvdyhuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIsIHNwaW5uZXI/OiBTcGlubmVyKSB7XG4gICAgY29uc3Qgc2hvd1Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoc3Bpbm5lciAmJiBPYmplY3Qua2V5cyhzcGlubmVyKS5sZW5ndGgpIHtcbiAgICAgICAgc3Bpbm5lclsnbmFtZSddID0gbmFtZTtcbiAgICAgICAgdGhpcy5zcGlubmVyT2JzZXJ2YWJsZS5uZXh0KG5ldyBOZ3hTcGlubmVyKHsgLi4uc3Bpbm5lciwgc2hvdzogdHJ1ZSB9KSk7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNwaW5uZXJPYnNlcnZhYmxlLm5leHQobmV3IE5neFNwaW5uZXIoeyBuYW1lLCBzaG93OiB0cnVlIH0pKTtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2hvd1Byb21pc2U7XG4gIH1cbiAgLyoqXG4gICogVG8gaGlkZSBzcGlubmVyXG4gICpcbiAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgKi9cbiAgaGlkZShuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIpIHtcbiAgICBjb25zdCBoaWRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuc3Bpbm5lck9ic2VydmFibGUubmV4dChuZXcgTmd4U3Bpbm5lcih7IG5hbWUsIHNob3c6IGZhbHNlIH0pKTtcbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpZGVQcm9taXNlO1xuICB9XG59XG4iXX0=