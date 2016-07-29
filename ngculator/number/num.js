/**
 * Numeric button inputs
 *
 * These take a number and directly change the calculator input
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncNum", {
    template: `<button ng-click=$ctrl.click()><span class=button-content>{{$ctrl.num}}</span></button>`,
    controller: "NcNumController",
    bindings: {
        num: "@",
    },
});

ngculator.controller("NcNumController", function (InputService) {
    this.click = () => InputService.append(+this.num);
});
