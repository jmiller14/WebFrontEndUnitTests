describe("ncSubtract", () => {
    let InputService;
    let $controller;

    beforeEach(inject((_InputService_, _$controller_) => {
        InputService = _InputService_;
        $controller = _$controller_;
    }));

    describe("click", () => {
        it("appends sets subtract operator on click", () => {
            InputService.clear();
            const NcSubtractController = $controller("NcSubtractController");

            InputService.append(1);
            NcSubtractController.click();

            expect(InputService.lastNum).to.equal(1);
            expect(InputService.operation).to.exist;
        });

        it("subtracts two operands on click", () => {
            InputService.clear();
            const NcSubtractController = $controller("NcSubtractController");

            InputService.append(8);
            NcSubtractController.click();
            InputService.append(3);
            InputService.executeOperation();

            expect(InputService.num).to.equal(5);
        });
    });
});

