# Running Tools

## Installation

```
npm install running-tools
```

## Features

- [Distance](#distance)
- [Elevation](#elevation)
- [Speed](#speed)
- [Pace](#pace)
- [Heart rate](#heart-rate)

Running Tools provides several typed functions that can be useful for running.

### Distance

Running Tools provides several distance converters:

```typescript
import {
  metersToKilometers,
  metersToMiles,
  kilometersToMiles,
  kilometersToMeters,
  milesToKilometers,
  milesToMeters,
} from "running-tools";
```

<details>

```typescript
/**
 * Convert meters to kilometers.
 * @param meters - The meter distance to convert (number).
 * @returns The corresponding distance in kilometers (number).
 */
metersToKilometers(2500); // Result: 2.5
/**
 * Convert meters to miles.
 * @param meters - The meter distance to convert (number).
 * @returns The corresponding distance in miles (number).
 */
metersToMiles(1609.344); // Result: 1

/**
 * Convert kilometers to miles.
 * @param kilometers - The kilometer distance to convert (number).
 * @returns The corresponding distance in miles (number).
 */
kilometersToMiles(1.609344); // Result: 1
/**
 * Convert kilometers to meters.
 * @param kilometers - The kilometer distance to convert (number).
 * @returns The corresponding distance in meters (number).
 */
kilometersToMeters(2); // Result: 2000

/**
 * Convert miles to kilometers.
 * @param miles - The mile distance to convert (number).
 * @returns The corresponding distance in kilometers (number).
 */
milesToKilometers(1); // Result: 1.609344
/**
 * Convert miles to meters.
 * @param miles - The mile distance to convert (number).
 * @returns The corresponding distance in meters (number).
 */
milesToMeters(1); // Result: 1609.344
```

</details>

### Elevation

Running Tools provides a function to calculate a slope and a function to calculate an elevation:

```typescript
import { calculateElevation, calculateSlope } from "running-tools";
```

<details>

```typescript
/**
 * Calculates the elevation given the distance and slope.
 * @param distance - The distance traveled.
 * @param slope - The slope as a percentage.
 * @returns The change in elevation, or null if the distance is less than or equal to 0.
 */
calculateElevation(100, -10); // Result: -10

/**
 * Calculates the slope given the distance and elevation.
 * Distance and elevation must be in the same units.
 * @param distance - The distance traveled.
 * @param elevation - The change in elevation.
 * @returns The slope as a percentage, or null if the distance is less than or equal to 0.
 */
calculateSlope(100, 50); // Result: 50
```

</details>

### Speed

Running Tools provides a speed to pace converter and speed converters:

```typescript
import {
  speedToPace,
  metersPerSecondToKilometersPerHour,
  metersPerSecondToMilesPerHour,
  kilometersPerHourToMilesPerHour,
  kilometersPerHourToMetersPerSecond,
  milesPerHourToKilometersPerHour,
  milesPerHourToMetersPerSecond,
} from "running-tools";
```

<details>

```typescript
/**
 * Convert a speed to pace. See the speed param for unit description.
 * @param speed - The speed to convert (number).
 * If the unit of the provided speed is miles per hour, the result will be in minutes, seconds per mile.
 * If the unit of the provided speed is kilometers per hour, the result will be in minutes, seconds per kilometer.
 * @returns The corresponding pace (Pace) or null if the speed is less than or equal to 0.
 */
speedToPace(11); // Result: {minutes: 5, seconds: 27}

/**
 * Convert speed from meters per second to kilometers per hour.
 * @param speed - The speed in meters per second.
 * @returns The speed in kilometers per hour.
 */
metersPerSecondToKilometersPerHour(11); // Result: 39.6

/**
 * Convert speed from meters per second to miles per hour.
 * @param speed - The speed in meters per second.
 * @returns The speed in miles per hour.
 */
metersPerSecondToMilesPerHour(11); // Result: ~24.6063

/**
 * Convert speed from kilometers per hour to miles per hour.
 * @param speed - The speed in kilometers per hour.
 * @returns The speed in miles per hour.
 */
kilometersPerHourToMilesPerHour(11); // Result: ~6.8351

/**
 * Convert speed from kilometers per hour to meters per second.
 * @param speed - The speed in kilometers per hour.
 * @returns The speed in meters per second.
 */
kilometersPerHourToMetersPerSecond(11); // Result: ~3.0556

/**
 * Convert speed from miles per hour to kilometers per hour.
 * @param speed - The speed in miles per hour.
 * @returns The speed in kilometers per hour.
 */
milesPerHourToKilometersPerHour(11); // Result: ~17.7028

/**
 * Convert speed from miles per hour to meters per second.
 * @param speed - The speed in miles per hour.
 * @returns The speed in meters per second.
 */
milesPerHourToMetersPerSecond(11); // Result: ~4.9174
```

</details>

### Pace

Running Tools provides a pace to speed converter.

```typescript
import {
  minutesPerKilometerToMinutesPerMile,
  minutesPerMileToMinutesPerKilometer,
  paceToSpeed,
} from "../pace";
```

<details>

```typescript
/**
 * Convert a pace to speed. See the pace param for unit description.
 * @param pace - The pace to convert (Pace).
 * If the unit of the provided pace is minutes, seconds per mile, the result will be in miles per hour.
 * If the unit of the provided pace is minutes, seconds per kilometer, the result will be in kilometers per hour.
 * @param fractionDigits - Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 * @returns The corresponding speed (number) or null if the pace is invalid (if minutes or seconds is less than or equal to 0).
 */
paceToSpeed({ minutes: 4, seconds: 25 }); // Result: 13.58
paceToSpeed({ minutes: 4, seconds: 25 }, 1); // Result: 13.6

/**
 * Converts a pace from minutes per kilometer to minutes per mile.
 * @param pace - The pace to convert (Pace).
 * @returns The converted pace in minutes per mile (Pace) or null if the pace is invalid.
 */
minutesPerKilometerToMinutesPerMile({ minutes: 4, seconds: 15 }); //Result: { minutes: 6, seconds: 50 }

/**
 * Converts a pace from minutes per mile to minutes per kilometer.
 * @param pace - The pace to convert (Pace).
 * @returns The converted pace in minutes per kilometer (Pace) or null if the pace is invalid.
 */
minutesPerMileToMinutesPerKilometer({ minutes: 5, seconds: 18 }); // Result: { minutes: 3, seconds: 17 })
```

</details>

### Heart rate

#### Maximum heart rate

Running Tools provides three different functions to calculate maximum heart rate:

```typescript
import {
  maxHeartRateGellishAl,
  maxHeartRateGellishColl,
  maxHeartRateHaskellFox,
} from "running-tools";
```

<details>

```typescript
/**
 * Calculates the maximum heart rate using the Gellish and Al formula.
 * @param age - The age of the person in years.
 * @returns The maximum heart rate in beats per minute, or null if age is not a positive number.
 */
maxHeartRateGellishAl(20); // Result: 193

/**
 * Calculates the maximum heart rate using the Haskell and Fox formula.
 * @param age - The age of the person in years.
 * @returns The maximum heart rate in beats per minute, or null if age is not a positive number.
 */
maxHeartRateHaskellFox(20); // Result: 200

/**
 * Calculates the maximum heart rate using the Gellish and Coll formula.
 * @param age - The age of the person in years.
 * @returns The maximum heart rate in beats per minute, or null if age is not a positive number.
 */
maxHeartRateGellishColl(20); // Result: 189.2
```

</details>

#### Heart rate zones

Running tools provides two functions to calculate heart rate zones: one using the Karvonen method and the other using maximum heart rate only.
Zone ranges are the following for the two functions: [50%-60%], [60%-70%], [70%-80%], [80%-90%], [90%-100%].

```typescript
import {
  calculateHeartRateZonesUsingKarvonen,
  calculateHeartRateZonesUsingMax,
} from "running-tools";
```

<details>

```typescript
/**
 * Calculates the heart rate zones based on the maximum heart rate and resting heart rate.
 * @param maxHeartRate - The maximum heart rate.
 * @param restingHeartRate - The resting heart rate.
 * @returns - The heart rate zones or null if maxHeartRate is not greater than restingHeartRate or if either value is not positive.
 */
calculateHeartRateZonesUsingKarvonen(180, 60);
[
  {
    index: 1,
    minPercentage: 0.5,
    maxPercentage: 0.6,
    minHeartRate: 120,
    maxHeartRate: 132,
  },
  {
    index: 2,
    minPercentage: 0.6,
    maxPercentage: 0.7,
    minHeartRate: 132,
    maxHeartRate: 144,
  },
  {
    index: 3,
    minPercentage: 0.7,
    maxPercentage: 0.8,
    minHeartRate: 144,
    maxHeartRate: 156,
  },
  {
    index: 4,
    minPercentage: 0.8,
    maxPercentage: 0.9,
    minHeartRate: 156,
    maxHeartRate: 168,
  },
  {
    index: 5,
    minPercentage: 0.9,
    maxPercentage: 1,
    minHeartRate: 168,
    maxHeartRate: 180,
  },
];

/**
 * Calculates the heart rate zones based on the maximum heart rate.
 * @param maxHeartRate - The maximum heart rate.
 * @returns - The heart rate zones or null if maxHeartRate is not positive.
 */
calculateHeartRateZonesUsingMax(180);
[
  {
    index: 1,
    minPercentage: 0.5,
    maxPercentage: 0.6,
    minHeartRate: 90,
    maxHeartRate: 108,
  },
  {
    index: 2,
    minPercentage: 0.6,
    maxPercentage: 0.7,
    minHeartRate: 108,
    maxHeartRate: 126,
  },
  {
    index: 3,
    minPercentage: 0.7,
    maxPercentage: 0.8,
    minHeartRate: 126,
    maxHeartRate: 144,
  },
  {
    index: 4,
    minPercentage: 0.8,
    maxPercentage: 0.9,
    minHeartRate: 144,
    maxHeartRate: 162,
  },
  {
    index: 5,
    minPercentage: 0.9,
    maxPercentage: 1,
    minHeartRate: 162,
    maxHeartRate: 180,
  },
];
```

</details>

## Contributors

Contributors are more than welcomed.
Also feel free to ask for more features on the GitHub repository.

## License

MIT License.
