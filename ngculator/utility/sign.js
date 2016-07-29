/**
 * Input clear button
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncSign", {
    template: `<button class=utility ng-click=$ctrl.click()><span class=button-content>+/-</span></button>`,
    controller: "NcSignController",
});

ngculator.controller("NcSignController", function (InputService) {
    this.click = () => InputService.toggleSign();
});
