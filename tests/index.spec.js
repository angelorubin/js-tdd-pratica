import { expect } from "chai";
import { sum, sub, mult, div } from "../src/index";

describe("Calc", () => {
  // smoke test
  describe("Smoke test", () => {
    it("should exist the calc lib", () => {
      expect(sum).to.exist;
    });
    it("should exist the method 'sum'", () => {
      expect(sum).to.be.a("function");
    });
    it("should exist the method 'sub'", () => {
      expect(sub).to.be.a("function");
    });
    it("should exist the method 'mult'", () => {
      expect(mult).to.be.a("function");
    });
    it("should exist the method 'div'", () => {
      expect(div).to.be.a("function");
    });
  });
  describe("Sum", () => {
    it("should return 4 when sum(2, 2)", () => {
      expect(sum(2, 2)).to.equal(4);
    });
  });
  describe("Sub", () => {
    it("should return -4 when sub(6, 10)", () => {
      expect(sub(6, 10)).to.equal(-4);
    });
  });
  describe("Mult", () => {
    it("should return 4 when sub(2, 2)", () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });
  describe("Div", () => {
    const message = "Não é possível divisão por zero";
    it("should return 1 when sub(2, 2)", () => {
      expect(div(2, 2)).to.be.equal(1);
    });
    it(`should return ${message} when div(4, 0) ou div(0, 4) ou`, () => {
      expect(div(4, 0)).to.be.equal(message);
    });
  });
});
