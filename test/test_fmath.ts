import { expect } from "chai";
import { fcomb } from "../src/fmath";

describe("Fast combinations", () => {
    it("must be one for n = 0 and k = 0", () => {
        expect(fcomb(0, 0)).to.equal(1);
    });
    it("must be one for n = 42 and k = 0", () => {
        expect(fcomb(42, 0)).to.equal(1);
    });
    it("must be one for n = k", () => {
        expect(fcomb(42, 42)).to.equal(1);
    });
    it("must throw if k is negative", () => {
        expect(
            () => { fcomb(42, -42); },
        ).to.throw(
            RangeError, "Value of k must be in [0, 42], was -42",
        );
    });
});
