describe("ncAdd", () => {
    let InputService;
    let $controller;

    beforeEach(inject((_InputService_, _$controller_) => {
        InputService = _InputService_;
        $controller = _$controller_;
    }));

    describe("click", () => {
        it("appends sets add operator on click", () => {
            InputService.clear();
            const NcAddController = $controller("NcAddController");

            InputService.append(1);
            NcAddController.click();

            expect(InputService.lastNum).to.equal(1);
            expect(InputService.operation).to.exist;
        });

        it("adds two operands on click", () => {
            InputService.clear();
            const NcAddController = $controller("NcAddController");

            InputService.append(1);
            NcAddController.click();
            InputService.append(2);
            InputService.executeOperation();

            expect(InputService.num).to.equal(3);
        });
    });
});

