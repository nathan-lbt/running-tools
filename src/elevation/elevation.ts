/**
 * Calculates the slope given the distance and elevation.
 * Distance and elevation must be in the same units.
 * @param distance - The distance traveled.
 * @param elevation - The change in elevation.
 * @returns The slope as a percentage, or null if the distance is less than or equal to 0.
 */
export const calculateSlope = (
  distance: number,
  elevation: number
): number | null => {
  if (distance <= 0) {
    return null;
  }
  const slope = (elevation / distance) * 100;
  return slope;
};

/**
 * Calculates the elevation given the distance and slope.
 * @param distance - The distance traveled.
 * @param slope - The slope as a percentage.
 * @returns The change in elevation, or null if the distance is less than or equal to 0.
 */
export const calculateElevation = (
  distance: number,
  slope: number
): number | null => {
  if (distance <= 0) {
    return null;
  }
  const elevation = (slope * distance) / 100;
  return elevation;
};
