import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener } from '@angular/core';
let StrictNumberOnlyDirective = class StrictNumberOnlyDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        //private regex: RegExp = new RegExp('^[0-9]*$');
        this.regex = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g); //Decimal Number
        this.specialKeys = ['Backspace', 'ArrowLeft', 'ArrowRight'];
    }
    /**
     * Key board action
     * @param event
     */
    onKeyDown(event) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        const inputValue = this.elementRef.nativeElement.value.concat(event.key);
        console.log(event.key);
        if (inputValue && !String(inputValue).match(this.regex)) {
            event.preventDefault();
        }
        return;
    }
    /**
     * Copy Paste action
     * @param event
     */
    onPaste(event) {
        const clipboardData = (event.originalEvent || event).clipboardData.getData('text/plain');
        if (clipboardData) {
            const regEx = new RegExp('^[0-9]*$');
            if (!regEx.test(clipboardData)) {
                event.preventDefault();
            }
        }
        return;
    }
};
tslib_1.__decorate([
    HostListener('keydown', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [KeyboardEvent]),
    tslib_1.__metadata("design:returntype", void 0)
], StrictNumberOnlyDirective.prototype, "onKeyDown", null);
tslib_1.__decorate([
    HostListener('paste', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StrictNumberOnlyDirective.prototype, "onPaste", null);
StrictNumberOnlyDirective = tslib_1.__decorate([
    Directive({
        selector: '[NumberOnly]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], StrictNumberOnlyDirective);
export { StrictNumberOnlyDirective };
//# sourceMappingURL=StrictNumberOnlyDirective.js.map