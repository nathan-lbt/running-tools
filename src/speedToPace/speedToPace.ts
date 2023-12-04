import { MINUTES_IN_HOUR, SECONDS_IN_MINUTE } from "../consts";
import { Pace } from "../types";

/**
 * Convert a speed to pace. See the speed param for unit description.
 * @param speed - The speed to convert (number).
 * If the unit of the provided speed is miles per hour, the result will be in minutes, seconds per mile.
 * If the unit of the provided speed is kilometers per hour, the result will be in minutes, seconds per kilometer.
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
