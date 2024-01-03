import { MINUTES_IN_HOUR, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from "../consts";
import { distanceToMeters } from "../distance";
import { speedToMetersPerSecond } from "../speed";
import { DistanceUnit, SpeedUnit, Time } from "../types";

/**
 * Converts a Time object to seconds.
 * @param time - The Time object to convert.
 * @returns The time in seconds.
 *          Returns null if the time is less than or equal to 0.
 */
export const timeToSeconds = (time: Time): number | null => {
  const convertedTime =
    time.hours * SECONDS_IN_HOUR +
    time.minutes * SECONDS_IN_MINUTE +
    time.seconds;
  if (convertedTime <= 0) {
    return null;
  }
  return convertedTime;
};

/**
 * Converts seconds to a Time object.
 * @param seconds - The time in seconds.
 * @returns An object representing the time in hours, minutes, and seconds.
 *          Returns null if the seconds is less than or equal to 0.
 */
export const secondsToTime = (seconds: number): Time | null => {
  if (seconds < 0) {
    return null;
  }

  if (seconds === 0) {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const hours = Math.floor(seconds / SECONDS_IN_HOUR);
  const minutes = Math.floor((seconds % SECONDS_IN_HOUR) / MINUTES_IN_HOUR);
  const remainingSeconds = Math.floor(seconds % SECONDS_IN_MINUTE);

  return {
    hours,
    minutes,
    seconds: remainingSeconds,
  };
};

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

/**
 * Predicts the race time for a given distance based on previous achieved time and distance using the Riegel formula.
 * @param achievedTime - The time achieved for the achieved distance (Time).
 * @param achievedDistance - The distance already achieved (number).
 * @param achievedDistanceUnit - The unit of measurement for the achieved distance (DistanceUnit).
 * @param predictedDistance - The distance for which the race time is predicted (number).
 * @param predictedDistanceUnit - The unit of measurement for the predicted distance (DistanceUnit). Optional, defaults to the achieved distance unit.
 * @returns An object representing the predicted race time in hours, minutes, and seconds.
 *          Returns null if either the achieved distance or predicted distance is less than or equal to 0,
 *          or if the achieved time is invalid.
 */
export const timePredictionRiegel = (
  achievedTime: Time,
  achievedDistance: number,
  achievedDistanceUnit: DistanceUnit,
  predictedDistance: number,
  predictedDistanceUnit?: DistanceUnit
): Time | null => {
  if (achievedDistance <= 0 || predictedDistance <= 0) {
    return null;
  }

  const achievedSeconds = timeToSeconds(achievedTime);
  if (achievedSeconds === null || achievedSeconds <= 0) {
    return null;
  }

  const achievedDistanceInMeters = distanceToMeters(
    achievedDistance,
    achievedDistanceUnit
  );
  const predictedDistanceInMeters = distanceToMeters(
    predictedDistance,
    predictedDistanceUnit ?? achievedDistanceUnit
  );

  const predictedSeconds =
    achievedSeconds *
    (predictedDistanceInMeters / achievedDistanceInMeters) ** 1.06;

  return secondsToTime(predictedSeconds);
};

/**
 * Calculates the split times for a given speed and distance.
 * @param speed - The speed at which the distance is covered.
 * @param speedUnit - The unit of measurement for the speed.
 * @param distance - The total distance to be covered.
 * @param distanceUnit - The unit of measurement for the distance.
 * @param splitDistance - The distance at which to calculate the split times.
 * @param splitDistanceUnit - The unit of measurement for the split distance.
 * @returns An array of Time objects representing the split times.
 *          Returns null if either the distance, speed, or split distance is less than or equal to 0,
 *          or if the split distance is greater than or equal to the total distance.
 */
export const getSplitTimes = (
  speed: number,
  speedUnit: SpeedUnit,
  distance: number,
  distanceUnit: DistanceUnit,
  splitDistance: number,
  splitDistanceUnit: DistanceUnit
): Time[] | null => {
  if (distance <= 0 || speed <= 0 || splitDistance <= 0) {
    return null;
  }

  const convertedDistance = distanceToMeters(distance, distanceUnit);
  const convertedSplitDistance = distanceToMeters(
    splitDistance,
    splitDistanceUnit
  );
  if (convertedSplitDistance >= convertedDistance) {
    return null;
  }

  const convertedSpeed = speedToMetersPerSecond(speed, speedUnit);

  const splitTimes: Time[] = [];

  let distanceCovered = convertedSplitDistance;
  while (distanceCovered < convertedDistance) {
    const time = secondsToTime(distanceCovered / convertedSpeed) as Time;
    splitTimes.push(time);
    distanceCovered += convertedSplitDistance;
  }

  splitTimes.push(secondsToTime(convertedDistance / convertedSpeed) as Time);

  return splitTimes;
};
