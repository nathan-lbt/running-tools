import {
  METERS_IN_KILOMETER,
  METERS_IN_MILE,
  KILOMETERS_IN_MILE,
} from "../consts";

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
