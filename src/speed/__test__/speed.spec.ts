import {
  kilometersPerHourToMetersPerSecond,
  kilometersPerHourToMilesPerHour,
  metersPerSecondToKilometersPerHour,
  metersPerSecondToMilesPerHour,
  milesPerHourToKilometersPerHour,
  milesPerHourToMetersPerSecond,
  speedToPace,
} from "../speed";

describe("Speed converters", () => {
  describe("speedToPace", () => {
    it("returns correct pace", () => {
      const pace = speedToPace(11);
      expect(pace).not.toBe(null);
      expect(pace?.minutes).toBe(5);
      expect(pace?.seconds).toBe(27);
    });

    describe("returns null", () => {
      it("if speed equals 0", () => {
        expect(speedToPace(0)).toBe(null);
      });

      it("if speed is negative", () => {
        expect(speedToPace(-11)).toBe(null);
      });
    });
  });

  describe("metersPerSecondToKilometersPerHour", () => {
    it("returns correct speed", () => {
      expect(metersPerSecondToKilometersPerHour(11)).toBe(39.6);
    });
  });

  describe("metersPerSecondToMilesPerHour", () => {
    it("returns correct speed", () => {
      const convertedSpeed = metersPerSecondToMilesPerHour(11).toFixed(4);
      expect(Number(convertedSpeed)).toBe(24.6063);
    });
  });

  describe("kilometersPerHourToMilesPerHour", () => {
    it("returns correct speed", () => {
      const convertedSpeed = kilometersPerHourToMilesPerHour(11).toFixed(4);
      expect(Number(convertedSpeed)).toBe(6.8351);
    });
  });

  describe("kilometersPerHourToMetersPerSecond", () => {
    it("returns correct speed", () => {
      const convertedSpeed = kilometersPerHourToMetersPerSecond(11).toFixed(4);
      expect(Number(convertedSpeed)).toBe(3.0556);
    });
  });

  describe("milesPerHourToKilometersPerHour", () => {
    it("returns correct speed", () => {
      const convertedSpeed = milesPerHourToKilometersPerHour(11).toFixed(4);
      expect(Number(convertedSpeed)).toBe(17.7028);
    });
  });

  describe("milesPerHourToMetersPerSecond", () => {
    it("returns correct speed", () => {
      const convertedSpeed = milesPerHourToMetersPerSecond(11).toFixed(4);
      expect(Number(convertedSpeed)).toBe(4.9174);
    });
  });
});
