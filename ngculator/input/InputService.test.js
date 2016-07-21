describe("InputService", () => {
    let InputService;

    beforeEach(inject((_InputService_) => {
        InputService = _InputService_;
    }));

    describe("clear", () => {
        it("clears the input", () => {
            InputService.num = 1;

            InputService.clear();

            expect(InputService.num).to.equal(0);
        });
    });

    describe("append", () => {
        it("appends 1s value for non-decimal numbers", () => {
            InputService.clear();

            InputService.append(1);
            InputService.append(2);
            InputService.append(3);
            InputService.append(4);

            expect(InputService.num).to.equal(1234);
        });

        it("appends decimals to decimal numbers", () => {
            InputService.clear();
            InputService.decimalPlace = 1;

            InputService.append(2);
            InputService.append(3);
            InputService.append(4);

            expect(InputService.num).to.equal(0.234);
        });

        it("handles zeros in decimal places", () => {
            InputService.clear();

            InputService.append(1);
            InputService.append(2);
            InputService.append(3);
            InputService.append(4);
            InputService.addDecimal();
            InputService.append(1);
            InputService.append(0);
            InputService.append(3);
            InputService.append(0);
            InputService.append(5);

            expect(InputService.num).to.equal(1234.10305);
        });
    });
});
