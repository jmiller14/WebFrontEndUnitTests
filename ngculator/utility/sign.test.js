describe("ncSign", () => {
    let InputService;
    let $compile;
    let $rootScope;

    beforeEach(inject((_InputService_, _$compile_, _$rootScope_) => {
        InputService = _InputService_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    describe("click", () => {
        it("changes positive to negative", () => {
            InputService.clear();
            InputService.num = 1234;
            const $scope = $rootScope.$new();
            const element = angular.element("<nc-sign></nc-sign>");
            $compile(element)($scope);
            const controller = element.controller("ncSign");

            controller.click();

            expect(InputService.num).to.equal(-1234);
        });

        it("changes negative to positive", () => {
            InputService.clear();
            InputService.num = -1234;
            const $scope = $rootScope.$new();
            const element = angular.element("<nc-sign></nc-sign>");
            $compile(element)($scope);
            const controller = element.controller("ncSign");

            controller.click();

            expect(InputService.num).to.equal(1234);
        });

        it("toggles sign", () => {
            InputService.clear();
            InputService.num = 1234;
            const $scope = $rootScope.$new();
            const element = angular.element("<nc-sign></nc-sign>");
            $compile(element)($scope);
            const controller = element.controller("ncSign");

            controller.click();
            controller.click();

            expect(InputService.num).to.equal(1234);
        });
    });
});

