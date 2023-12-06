import {
  minutesPerKilometerToMinutesPerMile,
  minutesPerMileToMinutesPerKilometer,
  paceToSpeed,
} from "../pace";

describe("Pace converters", () => {
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

  describe("minutesPerKilometerToMinutesPerMile", () => {
    describe("returns correct pace", () => {
      it("if pace is valid", () => {
        expect(
          minutesPerKilometerToMinutesPerMile({ minutes: 4, seconds: 15 })
        ).toEqual({ minutes: 6, seconds: 50 });
      });
    });

    describe("returns null", () => {
      it("if pace is invalid", () => {
        expect(
          minutesPerKilometerToMinutesPerMile({ minutes: 4, seconds: 62 })
        ).toBe(null);
      });
    });
  });

  describe("minutesPerMileToMinutesPerKilometer", () => {
    describe("returns correct pace", () => {
      it("if pace is valid", () => {
        expect(
          minutesPerMileToMinutesPerKilometer({ minutes: 5, seconds: 18 })
        ).toEqual({ minutes: 3, seconds: 17 });
      });
    });

    describe("returns null", () => {
      it("if pace is invalid", () => {
        expect(
          minutesPerMileToMinutesPerKilometer({ minutes: 6, seconds: 62 })
        ).toBe(null);
      });
    });
  });
});
