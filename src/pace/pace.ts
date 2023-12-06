import {
  KILOMETERS_IN_MILE,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
} from "../consts";
import { Pace } from "../types";

const defaultFractionDigits = 2;

/**
 * Checks if a pace is valid or not.
 * True will be returned if minutes and seconds are in the range [0,60] and
 * one of the two values is greater than 0.
 * @param pace - The pace to convert (Pace).
 * @returns True if the pace is valid.
 */
const validatePace = (pace: Pace): boolean => {
  const { minutes, seconds } = pace;
  const isMinutesValid = minutes >= 0 && minutes <= 60;
  const isSecondsValid = seconds >= 0 && seconds <= 60;
  const isPaceValid = minutes !== 0 || seconds !== 0;
  return isMinutesValid && isSecondsValid && isPaceValid;
};

/**
 * Convert a pace to speed. See the pace param for unit description.
 * @param pace - The pace to convert (Pace).
 * If the unit of the provided pace is minutes, seconds per mile, the result will be in miles per hour.
 * If the unit of the provided pace is minutes, seconds per kilometer, the result will be in kilometers per hour.
 * @param fractionDigits - Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 * @returns The corresponding speed (number) or null if the pace is invalid (if minutes or seconds is less than or equal to 0).
 */
export const paceToSpeed = (
  pace: Pace,
  fractionDigits: number = defaultFractionDigits
): number | null => {
  const { minutes, seconds } = pace;

  if (!validatePace({ minutes, seconds })) {
    return null;
  }

  const secondsPerUnitDistance = minutes * SECONDS_IN_MINUTE + seconds;
  const speed = SECONDS_IN_HOUR / secondsPerUnitDistance;

  return Number(
    speed.toFixed(
      fractionDigits >= 0 && fractionDigits <= 20
        ? fractionDigits
        : defaultFractionDigits
    )
  );
};

/**
 * Converts a pace from minutes per kilometer to minutes per mile.
 * @param pace - The pace to convert (Pace).
 * @returns The converted pace in minutes per mile (Pace) or null if the pace is invalid.
 */
export const minutesPerKilometerToMinutesPerMile = (
  pace: Pace
): Pace | null => {
  const { minutes, seconds } = pace;

  if (!validatePace({ minutes, seconds })) {
    return null;
  }

  const secondsPerMile =
    (minutes * SECONDS_IN_MINUTE + seconds) * KILOMETERS_IN_MILE;
  const minutesPerMile = secondsPerMile / SECONDS_IN_MINUTE;

  const convertedMinutes = Math.floor(minutesPerMile);
  const convertedSeconds = Math.floor(
    (minutesPerMile - convertedMinutes) * SECONDS_IN_MINUTE
  );

  return { minutes: convertedMinutes, seconds: convertedSeconds };
};

/**
 * Converts a pace from minutes per mile to minutes per kilometer.
 * @param pace - The pace to convert (Pace).
 * @returns The converted pace in minutes per kilometer (Pace) or null if the pace is invalid.
 */
export const minutesPerMileToMinutesPerKilometer = (
  pace: Pace
): Pace | null => {
  const { minutes, seconds } = pace;

  if (!validatePace({ minutes, seconds })) {
    return null;
  }

  const secondsPerMile =
    (minutes * SECONDS_IN_MINUTE + seconds) / KILOMETERS_IN_MILE;
  const minutesPerKilometer = secondsPerMile / SECONDS_IN_MINUTE;

  const convertedMinutes = Math.floor(minutesPerKilometer);
  const convertedSeconds = Math.floor(
    (minutesPerKilometer - convertedMinutes) * SECONDS_IN_MINUTE
  );

  return { minutes: convertedMinutes, seconds: convertedSeconds };
};
