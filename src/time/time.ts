import { MINUTES_IN_HOUR, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from "../consts";
import { distanceToMeters } from "../distance";
import { speedToMetersPerSecond } from "../speed";
import { DistanceUnit, SpeedUnit, Time } from "../types";

/**
 * Calculates the race time based on the given distance and speed.
 * @param distance - The distance of the race.
 * @param distanceUnit - The unit of measurement for the distance.
 * @param speed - The speed at which the race is completed.
 * @param speedUnit - The unit of measurement for the speed.
 * @returns An object representing the race time in hours, minutes, and seconds.
 *          Returns null if either the distance or speed is less than or equal to 0.
 */
export const calculateRaceTime = (
  distance: number,
  distanceUnit: DistanceUnit,
  speed: number,
  speedUnit: SpeedUnit
): Time | null => {
  if (distance <= 0 || speed <= 0) {
    return null;
  }

  const convertedDistance = distanceToMeters(distance, distanceUnit);
  const convertedSpeed = speedToMetersPerSecond(speed, speedUnit);

  const seconds = convertedDistance / convertedSpeed;

  const hours = Math.floor(seconds / SECONDS_IN_HOUR);
  const minutes = Math.floor((seconds % SECONDS_IN_HOUR) / MINUTES_IN_HOUR);
  const remainingSeconds = Math.floor(seconds % SECONDS_IN_MINUTE);

  const timeObject = {
    hours,
    minutes,
    seconds: remainingSeconds,
  };

  return timeObject;
};
