import {
  METERS_IN_KILOMETER,
  METERS_IN_MILE,
  KILOMETERS_IN_MILE,
} from "../../consts";
import { DistanceUnit, SpeedUnit } from "../../types";
import {
  calculateDistance,
  convertDistance,
  distanceToMeters,
  kilometersToMeters,
  kilometersToMiles,
  metersToKilometers,
  metersToMiles,
  milesToKilometers,
  milesToMeters,
} from "../distance";

describe("Distance converters", () => {
  describe("converts meters to kilometers", () => {
    it("returns correct value", () => {
      expect(metersToKilometers(METERS_IN_KILOMETER)).toEqual(1);
    });
  });
  describe("converts meters to miles", () => {
    it("returns correct value", () => {
      expect(metersToMiles(METERS_IN_MILE)).toEqual(1);
    });
  });

  describe("converts a kilometer distance to miles", () => {
    it("returns correct value", () => {
      expect(kilometersToMiles(KILOMETERS_IN_MILE)).toEqual(1);
    });
  });
  describe("converts a kilometer distance to meters", () => {
    it("returns correct value", () => {
      expect(kilometersToMeters(1)).toEqual(METERS_IN_KILOMETER);
    });
  });

  describe("converts a mile distance to kilometers", () => {
    it("returns correct value", () => {
      expect(milesToKilometers(1)).toEqual(KILOMETERS_IN_MILE);
    });
  });
  describe("converts a mile distance to meters", () => {
    it("returns correct value", () => {
      expect(milesToMeters(1)).toEqual(METERS_IN_MILE);
    });
  });

  describe("distanceToMeters", () => {
    it("returns correct value for kilometers", () => {
      expect(distanceToMeters(1, DistanceUnit.Kilometers)).toEqual(
        METERS_IN_KILOMETER
      );
    });

    it("returns correct value for miles", () => {
      expect(distanceToMeters(1, DistanceUnit.Miles)).toEqual(METERS_IN_MILE);
    });

    it("returns correct value for meters", () => {
      expect(distanceToMeters(1, DistanceUnit.Meters)).toEqual(1);
    });

    it("throws error for unknown unit", () => {
      expect(() => distanceToMeters(1, "unknown" as DistanceUnit)).toThrow();
    });
  });

  describe("convertDistance", () => {
    it('converts distance from "Meters" to "Kilometers"', () => {
      expect(
        convertDistance(1000, DistanceUnit.Meters, DistanceUnit.Kilometers)
      ).toBe(1);
    });

    it('converts distance from "Meters" to "Miles"', () => {
      const convertedDistance = convertDistance(
        1000,
        DistanceUnit.Meters,
        DistanceUnit.Miles
      ).toFixed(4);
      expect(Number(convertedDistance)).toBe(0.6214);
    });

    it('converts distance from "Kilometers" to "Meters"', () => {
      expect(
        convertDistance(1, DistanceUnit.Kilometers, DistanceUnit.Meters)
      ).toBe(1000);
    });

    it('converts distance from "Kilometers" to "Miles"', () => {
      const convertedDistance = convertDistance(
        1,
        DistanceUnit.Kilometers,
        DistanceUnit.Miles
      ).toFixed(4);
      expect(Number(convertedDistance)).toBe(0.6214);
    });

    it('converts distance from "Miles" to "Meters"', () => {
      const convertedDistance = convertDistance(
        1,
        DistanceUnit.Miles,
        DistanceUnit.Meters
      );
      expect(convertedDistance).toBe(1609.344);
    });

    it('converts distance from "Miles" to "Kilometers"', () => {
      const convertedDistance = convertDistance(
        1,
        DistanceUnit.Miles,
        DistanceUnit.Kilometers
      ).toFixed(4);
      expect(Number(convertedDistance)).toBe(1.6093);
    });

    it("throws an error if the distance unit is not supported", () => {
      expect(() => {
        convertDistance(1, "unsupported" as DistanceUnit, DistanceUnit.Meters);
      }).toThrow();
    });

    it('throws an error if the "to" distance unit is not supported', () => {
      expect(() => {
        convertDistance(1, DistanceUnit.Meters, "unsupported" as DistanceUnit);
      }).toThrow();
    });
  });

  describe("calculateDistance", () => {
    it('calculates distance in "Meters" unit', () => {
      const distance = calculateDistance(10, SpeedUnit.KilometersPerHour, {
        hours: 1,
        minutes: 0,
        seconds: 0,
      });
      expect(distance).toBe(10000);
    });

    it('calculates distance in "Kilometers" unit', () => {
      const distance = calculateDistance(
        10,
        SpeedUnit.KilometersPerHour,
        { hours: 1, minutes: 0, seconds: 0 },
        DistanceUnit.Kilometers
      );
      expect(distance).toBe(10);
    });

    it('calculates distance in "Miles" unit', () => {
      const distance = calculateDistance(
        10,
        SpeedUnit.KilometersPerHour,
        { hours: 1, minutes: 0, seconds: 0 },
        DistanceUnit.Miles
      )?.toFixed(4);
      expect(Number(distance)).toBe(6.2137);
    });

    it("returns null if the speed is less than 0", () => {
      expect(
        calculateDistance(
          -10,
          SpeedUnit.KilometersPerHour,
          { hours: 1, minutes: 0, seconds: 0 },
          DistanceUnit.Miles
        )
      ).toBe(null);
    });

    it("returns null if the time is less than or equal to 0", () => {
      expect(
        calculateDistance(
          10,
          SpeedUnit.KilometersPerHour,
          { hours: 0, minutes: 0, seconds: 0 },
          DistanceUnit.Miles
        )
      ).toBe(null);
    });
  });
});
