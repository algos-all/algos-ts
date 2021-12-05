import { expect } from "chai";
import { binsearch } from "../src/binsearch";

describe("Binary search", () => {
    it("must find the element in the list of one element", () => {
        expect(binsearch([1], 1)).to.equal(0);
    });
    it("must find the element in the list of two elements", () => {
        expect(binsearch([1, 2], 1)).to.equal(0);
        expect(binsearch([1, 2], 2)).to.equal(1);
    });
    it("must find the element in the list of three elements", () => {
        expect(binsearch([1, 2, 3], 1)).to.equal(0);
        expect(binsearch([1, 2, 3], 2)).to.equal(1);
        expect(binsearch([1, 2, 3], 3)).to.equal(2);
    });
    it("must fail to find the element in the list of one element", () => {
        expect(binsearch([1], 2)).to.not.equal(0);
        expect(binsearch([1], 0)).to.not.equal(0);
    });
});
