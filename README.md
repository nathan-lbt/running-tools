# Running Tools

## Installation

```
npm install running-tools
```

## Features

- [Distance](#distance)
- [Elevation](#elevation)
- [Heart rate](#heart-rate)
- [Pace](#pace)
- [Speed](#speed)
- [Time](#time)

Running Tools provides several typed functions that can be useful for running.

### Distance

Running Tools provides several distance converters:

```typescript
import {
  calculateDistance,
  convertDistance,
  distanceToMeters,
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

/**
 * Convert a distance to meters based on the specified unit.
 * @param distance - The distance to convert (number).
 * @param unit - The unit of the distance (DistanceUnit).
 * @returns The corresponding distance in meters (number).
 * @throws Error if the unit is unknown.
 */
distanceToMeters(1, "km"); // Result: 1000

/**
 * Convert a distance to a different unit.
 * @param distance - The distance to convert (number).
 * @param unit - The unit of the distance (DistanceUnit).
 * @param toUnit - The unit to convert to (DistanceUnit).
 * @returns The corresponding distance in the new unit (number).
 * @throws Error if the unit or toUnit is unknown.
 */
convertDistance(1, "km", "m"); // Result: 1000

/**
 * Calculate the distance traveled based on time and speed.
 * @param speed - The speed of travel (number).
 * @param speedUnit - The unit of the speed (SpeedUnit).
 * @param time - The time taken to travel (Time).
 * @param toUnit - The unit to calculate the distance in (DistanceUnit). Defaults to DistanceUnit.Meters.
 * @returns The calculated distance in the specified unit (number) or null if the speed or time is invalid.
 */
calculateDistance(10, "kph", {
  hours: 1,
  minutes: 0,
  seconds: 0,
}); // Result: 10000
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

### Speed

Running Tools provides a speed to pace converter and speed converters:

```typescript
import {
  calculateSpeed,
  convertSpeed,
  metersPerSecondToKilometersPerHour,
  metersPerSecondToMilesPerHour,
  kilometersPerHourToMilesPerHour,
  kilometersPerHourToMetersPerSecond,
  milesPerHourToKilometersPerHour,
  milesPerHourToMetersPerSecond,
  speedToMetersPerSecond,
  speedToPace,
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

/**
 * Converts the given speed to meters per second.
 * @param speed - The speed value to convert.
 * @param unit - The unit of the speed value.
 * @returns The converted speed in meters per second.
 * @throws Error if the speed unit is unknown.
 */
speedToMetersPerSecond(11); // Result: ~4.9174

/**
 * Converts the given speed to the specified unit.
 * @param speed - The speed value to convert.
 * @param unit - The unit of the speed value.
 * @param toUnit - The unit to convert the speed to.
 * @returns The converted speed in the specified unit.
 * @throws Error if the speed unit or the target unit is unknown.
 */
convertSpeed(11, "m/s", "kmh"); // Result: 39.6

/**
 * Calculates the speed given the distance, distance unit, time, and target speed unit.
 * @param distance - The distance value (number).
 * @param distanceUnit - The unit of the distance value (DistanceUnit).
 * @param time - The time value (Time).
 * @param toUnit - The target speed unit (SpeedUnit). Defaults to SpeedUnit.MetersPerSecond.
 * @returns The calculated speed in the specified unit or null if the distance or time is invalid.
 */
calculateSpeed(10, "km", { hours: 1, minutes: 0, seconds: 0 }, "mph"); // Result: ~6.2137
```

</details>

### Time

Running Tools provides a function to calculate race time:

```typescript
import {
  calculateRaceTime,
  secondsToTime,
  timePredictionRiegel,
  timeToSeconds,
} from "running-tools";
```

<details>

```typescript
/**
 * Calculates the race time based on the given distance and speed.
 * @param distance - The distance of the race.
 * @param distanceUnit - The unit of measurement for the distance.
 * @param speed - The speed at which the race is completed.
 * @param speedUnit - The unit of measurement for the speed.
 * @returns An object representing the race time in hours, minutes, and seconds.
 *          Returns null if either the distance or speed is less than or equal to 0.
 */
calculateRaceTime(5, "mi", "mph"); // Result: {hours: 0, minutes: 30, seconds: 0}

/**
 * Converts seconds to a Time object.
 * @param seconds - The time in seconds.
 * @returns An object representing the time in hours, minutes, and seconds.
 *          Returns null if the seconds is less than or equal to 0.
 */
secondsToTime(1800); // Result: {hours: 0, minutes: 30, seconds: 0}

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
timePredictionRiegel(
  { hours: 1, minutes: 4, seconds: 0 },
  21097.5,
  "m",
  42195,
  "m"
); // Result: {hours: 2, minutes: 13, seconds: 26}

/**
 * Converts a Time object to seconds.
 * @param time - The Time object to convert.
 * @returns The time in seconds.
 *          Returns null if the time is less than or equal to 0.
 */
timeToSeconds({
  hours: 2,
  minutes: 30,
  seconds: 0,
}); // Result: 9000
```

</details>

## Contributors

Contributors are more than welcomed.
Also feel free to ask for more features on the GitHub repository.

## License

MIT License.
