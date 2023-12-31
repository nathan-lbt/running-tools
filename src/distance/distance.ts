import {
  METERS_IN_KILOMETER,
  METERS_IN_MILE,
  KILOMETERS_IN_MILE,
} from "../consts";
import { speedToMetersPerSecond } from "../speed";
import { timeToSeconds } from "../time";
import { DistanceUnit, SpeedUnit, Time } from "../types";

/**
 * Convert meters to kilometers.
 * @param meters - The meter distance to convert (number).
 * @returns The corresponding distance in kilometers (number).
 */
export const metersToKilometers = (meters: number) =>
  meters / METERS_IN_KILOMETER;
/**
 * Convert meters to miles.
 * @param meters - The meter distance to convert (number).
 * @returns The corresponding distance in miles (number).
 */
export const metersToMiles = (meters: number) => meters / METERS_IN_MILE;

/**
 * Convert kilometers to meters.
 * @param kilometers - The kilometer distance to convert (number).
 * @returns The corresponding distance in meters (number).
 */
export const kilometersToMeters = (kilometers: number) =>
  kilometers * METERS_IN_KILOMETER;
/**
 * Convert kilometers to miles.
 * @param kilometers - The kilometer distance to convert (number).
 * @returns The corresponding distance in miles (number).
 */
export const kilometersToMiles = (kilometers: number) =>
  kilometers / KILOMETERS_IN_MILE;

/**
 * Convert miles to kilometers.
 * @param miles - The mile distance to convert (number).
 * @returns The corresponding distance in kilometers (number).
 */
export const milesToKilometers = (miles: number) => miles * KILOMETERS_IN_MILE;
/**
 * Convert miles to meters.
 * @param miles - The mile distance to convert (number).
 * @returns The corresponding distance in meters (number).
 */
export const milesToMeters = (miles: number) => miles * METERS_IN_MILE;

/**
 * Convert a distance to meters based on the specified unit.
 * @param distance - The distance to convert (number).
 * @param unit - The unit of the distance (DistanceUnit).
 * @returns The corresponding distance in meters (number).
 * @throws Error if the unit is unknown.
 */
export const distanceToMeters = (
  distance: number,
  unit: DistanceUnit
): number => {
  switch (unit) {
    case DistanceUnit.Meters:
      return distance;
    case DistanceUnit.Kilometers:
      return kilometersToMeters(distance);
    case DistanceUnit.Miles:
      return milesToMeters(distance);
    default:
      throw new Error(`Unknown unit: ${unit}`);
  }
};

/**
 * Convert a distance to a different unit.
 * @param distance - The distance to convert (number).
 * @param unit - The unit of the distance (DistanceUnit).
 * @param toUnit - The unit to convert to (DistanceUnit).
 * @returns The corresponding distance in the new unit (number).
 * @throws Error if the unit or toUnit is unknown.
 */
export const convertDistance = (
  distance: number,
  unit: DistanceUnit,
  toUnit: DistanceUnit
): number => {
  const meters = distanceToMeters(distance, unit);
  switch (toUnit) {
    case DistanceUnit.Meters:
      return meters;
    case DistanceUnit.Kilometers:
      return metersToKilometers(meters);
    case DistanceUnit.Miles:
      return metersToMiles(meters);
    default:
      throw new Error(`Unknown unit: ${unit}`);
  }
};

/**
 * Calculate the distance traveled based on time and speed.
 * @param speed - The speed of travel (number).
 * @param speedUnit - The unit of the speed (SpeedUnit).
 * @param time - The time taken to travel (Time).
 * @param toUnit - The unit to calculate the distance in (DistanceUnit). Defaults to DistanceUnit.Meters.
 * @returns The calculated distance in the specified unit (number) or null if the speed or time is invalid.
 */
export const calculateDistance = (
  speed: number,
  speedUnit: SpeedUnit,
  time: Time,
  toUnit: DistanceUnit = DistanceUnit.Meters
): number | null => {
  const seconds = timeToSeconds(time);
  if (seconds === null || speed < 0) {
    return null;
  }

  if (speed === 0) {
    return 0;
  }

  const convertedSpeed = speedToMetersPerSecond(speed, speedUnit);
  const distance = convertDistance(
    convertedSpeed * seconds,
    DistanceUnit.Meters,
    toUnit
  );

  return distance;
};
