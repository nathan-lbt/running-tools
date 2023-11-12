/**
 * Defines the HeartRateZoneRange interface.
 */
interface HeartRateZoneRange {
  index: number;
  minPercentage: number;
  maxPercentage: number;
}

/**
 * Defines the HeartRateZone interface.
 */
interface HeartRateZone extends HeartRateZoneRange {
  minHeartRate: number;
  maxHeartRate: number;
}

/**
 * The heart rate zone ranges.
 */
const zonesRange: HeartRateZoneRange[] = [
  { index: 1, minPercentage: 0.5, maxPercentage: 0.6 },
  { index: 2, minPercentage: 0.6, maxPercentage: 0.7 },
  { index: 3, minPercentage: 0.7, maxPercentage: 0.8 },
  { index: 4, minPercentage: 0.8, maxPercentage: 0.9 },
  { index: 5, minPercentage: 0.9, maxPercentage: 1 },
];

/**
 * Calculates a limit heart rate using the maximum heart rate, resting heart rate, and percentage.
 * @param maxHeartRate The maximum heart rate.
 * @param restingHeartRate The resting heart rate.
 * @param percentage The percentage of the heart rate range.
 * @returns The limit heart rate.
 */
const calculateLimitHeartRate = (
  maxHeartRate: number,
  restingHeartRate: number,
  percentage: number
): number => {
  return Math.round(
    restingHeartRate + (maxHeartRate - restingHeartRate) * percentage
  );
};

/**
 * Calculates the heart rate zone using the maximum heart rate and resting heart rate.
 * @param maxHeartRate The maximum heart rate.
 * @param restingHeartRate The resting heart rate.
 * @param zoneRange The heart rate zone range.
 * @returns The heart rate zone.
 */
const calculateHeartRateZoneUsingKarvonen = (
  maxHeartRate: number,
  restingHeartRate: number,
  zoneRange: HeartRateZoneRange
): HeartRateZone => ({
  index: zoneRange.index,
  minPercentage: zoneRange.minPercentage,
  maxPercentage: zoneRange.maxPercentage,
  minHeartRate: calculateLimitHeartRate(
    maxHeartRate,
    restingHeartRate,
    zoneRange.minPercentage
  ),
  maxHeartRate: calculateLimitHeartRate(
    maxHeartRate,
    restingHeartRate,
    zoneRange.maxPercentage
  ),
});

/**
 * Calculates the heart rate zones based on the maximum heart rate and resting heart rate.
 * @param maxHeartRate The maximum heart rate.
 * @param restingHeartRate The resting heart rate.
 * @returns The heart rate zones or null if maxHeartRate is not greater than restingHeartRate or if either value is not positive.
 */
export const calculateHeartRateZonesUsingKarvonen = (
  maxHeartRate: number,
  restingHeartRate: number
): HeartRateZone[] | null => {
  if (
    maxHeartRate <= 0 ||
    restingHeartRate <= 0 ||
    maxHeartRate <= restingHeartRate
  ) {
    return null;
  }
  const zones: HeartRateZone[] = zonesRange.map((zoneRange) =>
    calculateHeartRateZoneUsingKarvonen(
      maxHeartRate,
      restingHeartRate,
      zoneRange
    )
  );
  return zones;
};

/**
 * Calculates the heart rate zone using the maximum heart rate.
 * @param maxHeartRate The maximum heart rate.
 * @param zoneRange The heart rate zone range.
 * @returns The heart rate zone.
 */
const calculateHeartRateZoneUsingMax = (
  maxHeartRate: number,
  zoneRange: HeartRateZoneRange
): HeartRateZone => ({
  index: zoneRange.index,
  minPercentage: zoneRange.minPercentage,
  maxPercentage: zoneRange.maxPercentage,
  minHeartRate: Math.round(maxHeartRate * zoneRange.minPercentage),
  maxHeartRate: Math.round(maxHeartRate * zoneRange.maxPercentage),
});

/**
 * Calculates the heart rate zones based on the maximum heart rate.
 * @param maxHeartRate The maximum heart rate.
 * @returns The heart rate zones or null if maxHeartRate is not positive.
 */
export const calculateHeartRateZonesUsingMax = (
  maxHeartRate: number
): HeartRateZone[] | null => {
  if (maxHeartRate <= 0) {
    return null;
  }
  const zones: HeartRateZone[] = zonesRange.map((zoneRange) =>
    calculateHeartRateZoneUsingMax(maxHeartRate, zoneRange)
  );
  return zones;
};
