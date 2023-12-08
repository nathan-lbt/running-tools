import {
  KILOMETERS_IN_MILE,
  METERS_IN_KILOMETER,
  METERS_IN_MILE,
  MINUTES_IN_HOUR,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
} from "../consts";
import { Pace, SpeedUnit } from "../types";

/**
 * Convert a speed to pace.
 * If the unit of the provided speed is miles per hour, the result will be in minutes, seconds per mile.
 * If the unit of the provided speed is kilometers per hour, the result will be in minutes, seconds per kilometer.
 * @param speed - The speed to convert (number).
 * @returns The corresponding pace (Pace) or null if the speed is less than or equal to 0.
 */
export const speedToPace = (speed: number): Pace | null => {
  if (speed <= 0) return null;

  const minutesPerKilometer = MINUTES_IN_HOUR / speed;

  const minutes = Math.floor(minutesPerKilometer);
  const seconds = Math.floor(
    (minutesPerKilometer - minutes) * SECONDS_IN_MINUTE
  );

  return { minutes, seconds };
};

/**
 * Convert speed from meters per second to kilometers per hour.
 * @param speed - The speed in meters per second.
 * @returns The speed in kilometers per hour.
 */
export const metersPerSecondToKilometersPerHour = (speed: number): number => {
  return (speed * SECONDS_IN_HOUR) / METERS_IN_KILOMETER;
};

/**
 * Convert speed from meters per second to miles per hour.
 * @param speed - The speed in meters per second.
 * @returns The speed in miles per hour.
 */
export const metersPerSecondToMilesPerHour = (speed: number): number => {
  return (speed * SECONDS_IN_HOUR) / METERS_IN_MILE;
};

/**
 * Convert speed from kilometers per hour to miles per hour.
 * @param speed - The speed in kilometers per hour.
 * @returns The speed in miles per hour.
 */
export const kilometersPerHourToMilesPerHour = (speed: number): number => {
  return speed / KILOMETERS_IN_MILE;
};

/**
 * Convert speed from kilometers per hour to meters per second.
 * @param speed - The speed in kilometers per hour.
 * @returns The speed in meters per second.
 */
export const kilometersPerHourToMetersPerSecond = (speed: number): number => {
  return (speed * METERS_IN_KILOMETER) / SECONDS_IN_HOUR;
};

/**
 * Convert speed from miles per hour to kilometers per hour.
 * @param speed - The speed in miles per hour.
 * @returns The speed in kilometers per hour.
 */
export const milesPerHourToKilometersPerHour = (speed: number): number => {
  return speed * KILOMETERS_IN_MILE;
};

/**
 * Convert speed from miles per hour to meters per second.
 * @param speed - The speed in miles per hour.
 * @returns The speed in meters per second.
 */
export const milesPerHourToMetersPerSecond = (speed: number): number => {
  return (speed * METERS_IN_MILE) / SECONDS_IN_HOUR;
};

/**
 * Converts the given speed to meters per second.
 * @param speed - The speed value to convert.
 * @param unit - The unit of the speed value.
 * @returns The converted speed in meters per second.
 * @throws Error if the speed unit is unknown.
 */
export const speedToMetersPerSecond = (
  speed: number,
  unit: SpeedUnit
): number => {
  switch (unit) {
    case SpeedUnit.MetersPerSecond:
      return speed;
    case SpeedUnit.KilometersPerHour:
      return kilometersPerHourToMetersPerSecond(speed);
    case SpeedUnit.MilesPerHour:
      return milesPerHourToMetersPerSecond(speed);
    default:
      throw new Error(`Unknown speed unit: ${unit}`);
  }
};

/**
 * Converts the given speed to the specified unit.
 * @param speed - The speed value to convert.
 * @param unit - The unit of the speed value.
 * @param toUnit - The unit to convert the speed to.
 * @returns The converted speed in the specified unit.
 * @throws Error if the speed unit or the target unit is unknown.
 */
export const convertSpeed = (
  speed: number,
  unit: SpeedUnit,
  toUnit: SpeedUnit
) => {
  const metersPerSecond = speedToMetersPerSecond(speed, unit);
  switch (toUnit) {
    case SpeedUnit.MetersPerSecond:
      return metersPerSecond;
    case SpeedUnit.KilometersPerHour:
      return metersPerSecondToKilometersPerHour(metersPerSecond);
    case SpeedUnit.MilesPerHour:
      return metersPerSecondToMilesPerHour(metersPerSecond);
    default:
      throw new Error(`Unknown speed unit: ${toUnit}`);
  }
};
