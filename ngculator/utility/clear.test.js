describe("ncClear", () => {
    let InputService;
    let $compile;
    let $rootScope;

    beforeEach(inject((_InputService_, _$compile_, _$rootScope_) => {
        InputService = _InputService_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    describe("click", () => {
        it("clears input", () => {
            InputService.clear();
            InputService.num = 1234.45;
            InputService.decimalPlace = 2;
            const $scope = $rootScope.$new();
            const element = angular.element("<nc-clear></nc-clear>");
            $compile(element)($scope);
            const controller = element.controller("ncClear");

            controller.click();

            expect(InputService.num).to.equal(0);
            expect(InputService.decimalPlace).to.equal(0);
        });
    });
});

