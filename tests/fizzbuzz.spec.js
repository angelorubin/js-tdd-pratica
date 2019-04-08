/**
 * Se o Número for divisivel por 3 escreva Fizz
 * Se o número for divisivel por 5 escreva Buzz
 * Se o número for divisível por 3 e 5 escreva FizzBuzz
 * Se o número não for múltiplo de nada retorna o número
 */

import { expect } from "chai";
import { FizzBuzz } from "../src/fizzbuzz";

describe("FizzBuzz", () => {
  it("should return 'Fizz' when the number is multiple of 3", () => {
    expect(FizzBuzz(3)).to.be.equal("Fizz");
  });

  it("should return 'Buzz' when the number is multiple of 5", () => {
    expect(FizzBuzz(5)).to.be.equal("Buzz");
  });

  it("should return 'FizzBuzz' when the number is multiple of 3 and 5", () => {
    expect(FizzBuzz(15)).to.be.equal("FizzBuzz");
  });

  it("should return the number when the number is not multiple of 3 and 5", () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });
});
