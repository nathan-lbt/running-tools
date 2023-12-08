import { calculateRaceTime } from "../time";
import { DistanceUnit, SpeedUnit } from "../../types";

describe("calculateRaceTime", () => {
  it("should return the correct race time in hours, minutes, and seconds", () => {
    expect(
      calculateRaceTime(
        10,
        DistanceUnit.Kilometers,
        5,
        SpeedUnit.KilometersPerHour
      )
    ).toEqual({
      hours: 2,
      minutes: 0,
      seconds: 0,
    });

    expect(
      calculateRaceTime(5, DistanceUnit.Miles, 10, SpeedUnit.MilesPerHour)
    ).toEqual({
      hours: 0,
      minutes: 30,
      seconds: 0,
    });
  });

  it("should return null if either the distance or speed is less than or equal to 0", () => {
    expect(
      calculateRaceTime(
        0,
        DistanceUnit.Kilometers,
        5,
        SpeedUnit.KilometersPerHour
      )
    ).toEqual(null);

    expect(
      calculateRaceTime(5, DistanceUnit.Miles, 0, SpeedUnit.MilesPerHour)
    ).toEqual(null);

    expect(
      calculateRaceTime(
        0,
        DistanceUnit.Kilometers,
        0,
        SpeedUnit.KilometersPerHour
      )
    ).toEqual(null);
  });
});
