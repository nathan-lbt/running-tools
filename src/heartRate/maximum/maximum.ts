/**
 * Calculates the maximum heart rate using the Gellish and Al formula.
 * @param age - The age of the person in years.
 * @returns The maximum heart rate in beats per minute, or null if age is not a positive number.
 */
export const maxHeartRateGellishAl = (age: number): number | null => {
  if (age <= 0) {
    return null;
  }
  const maxHR = 207 - 0.7 * age;
  return maxHR;
};

/**
 * Calculates the maximum heart rate using the Haskell and Fox formula.
 * @param age - The age of the person in years.
 * @returns The maximum heart rate in beats per minute, or null if age is not a positive number.
 */
export const maxHeartRateHaskellFox = (age: number): number | null => {
  if (age <= 0) {
    return null;
  }
  const maxHR = 220 - age;
  return maxHR;
};

/**
 * Calculates the maximum heart rate using the Gellish and Coll formula.
 * @param age - The age of the person in years.
 * @returns The maximum heart rate in beats per minute, or null if age is not a positive number.
 */
export const maxHeartRateGellishColl = (age: number): number | null => {
  if (age <= 0) {
    return null;
  }
  const maxHR = 192 - 0.007 * age ** 2;
  return maxHR;
};
