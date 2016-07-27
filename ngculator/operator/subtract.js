/**
 * Subtract operator
 *
 * Store previous input value to operate on and set next operation to subtract
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncSubtract", {
    template: `<button ng-click=$ctrl.click()>&ndash;</button>`,
    controller: "NcSubtractController",
});

ngculator.controller("NcSubtractController", function (InputService) {
    this.click = () => InputService.setOperation((left, right) => left - right);
});

