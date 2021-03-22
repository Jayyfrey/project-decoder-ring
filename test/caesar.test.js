const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("Caesar", () => {

    it("should return false if no shift value is given", () => {
        const expected = false;
        const actual = caesarModule("random text");
        expect(actual).to.equal(expected);
      });

    it("should return false if shift is equal to 0", () => {
      const expected = false;
      const actual = caesarModule("random text", 0);
      expect(actual).to.equal(expected);
    });

    it("should return false if shift value is less than -25", () => {
        const expected = false;
        const actual = caesarModule("random text", -26);
    expect(actual).to.equal(expected);
    });

    it("should return false if shift value is greater than 25", () => {
        const expected = false;
        const actual = caesarModule("random text",26);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and special symbols while encoding", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesarModule("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and special symbols while decoding", () => {
        const expected = "this is a secret message!";
        const actual = caesarModule("bpqa qa I amKzmb umAaiom!", 8, false);
        expect(actual).to.equal(expected);
    });

});