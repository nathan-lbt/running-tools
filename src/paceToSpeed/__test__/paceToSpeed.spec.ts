import { paceToSpeed } from "../paceToSpeed";

describe("paceToSpeed", () => {
  describe("returns correct speed", () => {
    it("with default fraction digits", () => {
      expect(paceToSpeed({ minutes: 4, seconds: 25 })).toBe(13.58);
    });

    it("with correct fraction digits", () => {
      expect(paceToSpeed({ minutes: 4, seconds: 25 }, 1)).toBe(13.6);
    });

    it("with default fraction digits if provided parameter is invalid", () => {
      expect(paceToSpeed({ minutes: 4, seconds: 25 }, 42)).toBe(13.58);
    });
  });

  describe("returns null", () => {
    it("if minutes and speed equal 0", () => {
      expect(paceToSpeed({ minutes: 0, seconds: 0 })).toBe(null);
    });

    it("if minutes is negative", () => {
      expect(paceToSpeed({ minutes: 4, seconds: -1 })).toBe(null);
    });

    it("if seconds is negative", () => {
      expect(paceToSpeed({ minutes: -1, seconds: 25 })).toBe(null);
    });

    it("if seconds is greater than 60", () => {
      expect(paceToSpeed({ minutes: 4, seconds: 62 })).toBe(null);
    });
  });
});
