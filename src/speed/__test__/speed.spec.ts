import { SpeedUnit } from "../../types";
import {
  convertSpeed,
  kilometersPerHourToMetersPerSecond,
  kilometersPerHourToMilesPerHour,
  metersPerSecondToKilometersPerHour,
  metersPerSecondToMilesPerHour,
  milesPerHourToKilometersPerHour,
  milesPerHourToMetersPerSecond,
  speedToMetersPerSecond,
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

  describe("speedToMetersPerSecond", () => {
    it("returns correct speed for KilometersPerHour unit", () => {
      const convertedSpeed = speedToMetersPerSecond(
        11,
        SpeedUnit.KilometersPerHour
      ).toFixed(4);
      expect(Number(convertedSpeed)).toBe(3.0556);
    });

    it("returns correct speed for MilesPerHour unit", () => {
      const convertedSpeed = speedToMetersPerSecond(
        11,
        SpeedUnit.MilesPerHour
      ).toFixed(4);
      expect(Number(convertedSpeed)).toBe(4.9174);
    });

    it("returns correct speed for MetersPerSecond unit", () => {
      expect(speedToMetersPerSecond(11, SpeedUnit.MetersPerSecond)).toBe(11);
    });

    it("throws an error if the speed unit is not supported", () => {
      expect(() => {
        speedToMetersPerSecond(11, "unsupported" as SpeedUnit);
      }).toThrow();
    });
  });

  describe("convertSpeed", () => {
    it('converts speed from "MetersPerSecond" to "KilometersPerHour"', () => {
      const convertedSpeed = convertSpeed(
        11,
        SpeedUnit.MetersPerSecond,
        SpeedUnit.KilometersPerHour
      );
      expect(convertedSpeed).toBe(39.6);
    });

    it('converts speed from "MetersPerSecond" to "MilesPerHour"', () => {
      const convertedSpeed = convertSpeed(
        11,
        SpeedUnit.MetersPerSecond,
        SpeedUnit.MilesPerHour
      ).toFixed(4);
      expect(Number(convertedSpeed)).toBe(24.6063);
    });

    it('converts speed from "KilometersPerHour" to "MetersPerSecond"', () => {
      const convertedSpeed = convertSpeed(
        11,
        SpeedUnit.KilometersPerHour,
        SpeedUnit.MetersPerSecond
      ).toFixed(4);
      expect(Number(convertedSpeed)).toBe(3.0556);
    });

    it('converts speed from "KilometersPerHour" to "MilesPerHour"', () => {
      const convertedSpeed = convertSpeed(
        11,
        SpeedUnit.KilometersPerHour,
        SpeedUnit.MilesPerHour
      ).toFixed(4);
      expect(Number(convertedSpeed)).toBe(6.8351);
    });

    it('converts speed from "MilesPerHour" to "MetersPerSecond"', () => {
      const convertedSpeed = convertSpeed(
        11,
        SpeedUnit.MilesPerHour,
        SpeedUnit.MetersPerSecond
      ).toFixed(4);
      expect(Number(convertedSpeed)).toBe(4.9174);
    });

    it('converts speed from "MilesPerHour" to "KilometersPerHour"', () => {
      const convertedSpeed = convertSpeed(
        11,
        SpeedUnit.MilesPerHour,
        SpeedUnit.KilometersPerHour
      ).toFixed(4);
      expect(Number(convertedSpeed)).toBe(17.7028);
    });

    it("throws an error if unit is not supported", () => {
      expect(() => {
        convertSpeed(11, "unsupported" as SpeedUnit, SpeedUnit.MetersPerSecond);
      }).toThrow();
    });

    it("throws an error if toUnit is not supported", () => {
      expect(() => {
        convertSpeed(11, SpeedUnit.MetersPerSecond, "unsupported" as SpeedUnit);
      }).toThrow();
    });
  });
});
