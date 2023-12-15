import {
  calculateRaceTime,
  secondsToTime,
  timePredictionRiegel,
  timeToSeconds,
} from "../time";
import { DistanceUnit, SpeedUnit } from "../../types";

describe("Time utils", () => {
  describe("timeToSeconds", () => {
    it("should return the correct number of seconds", () => {
      expect(
        timeToSeconds({
          hours: 2,
          minutes: 30,
          seconds: 0,
        })
      ).toEqual(9000);

      expect(
        timeToSeconds({
          hours: 0,
          minutes: 30,
          seconds: 0,
        })
      ).toEqual(1800);

      expect(
        timeToSeconds({
          hours: 0,
          minutes: 0,
          seconds: 30,
        })
      ).toEqual(30);
    });

    it("should return null if the time is less than or equal to 0", () => {
      expect(
        timeToSeconds({
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      ).toEqual(null);

      expect(
        timeToSeconds({
          hours: 0,
          minutes: 0,
          seconds: -1,
        })
      ).toEqual(null);
    });
  });

  describe("secondsToTime", () => {
    it("should return the correct time in hours, minutes, and seconds", () => {
      expect(secondsToTime(9000)).toEqual({
        hours: 2,
        minutes: 30,
        seconds: 0,
      });

      expect(secondsToTime(1800)).toEqual({
        hours: 0,
        minutes: 30,
        seconds: 0,
      });

      expect(secondsToTime(30)).toEqual({
        hours: 0,
        minutes: 0,
        seconds: 30,
      });
    });

    it('should return "0" if the time is 0', () => {
      expect(secondsToTime(0)).toEqual({
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    });

    it("should return null if the seconds is less than or equal to 0", () => {
      expect(secondsToTime(-1)).toEqual(null);
    });
  });

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

  describe("timePredictionRiegel", () => {
    it("should return the predicted time based on the Riegel formula using different distance units", () => {
      const predictedTime = timePredictionRiegel(
        { hours: 0, minutes: 40, seconds: 0 },
        10,
        DistanceUnit.Kilometers,
        5000,
        DistanceUnit.Meters
      );

      expect(predictedTime).not.toBeNull();
      expect(predictedTime?.hours).toEqual(0);
      expect(predictedTime?.minutes).toEqual(19);
      expect(predictedTime?.seconds).toEqual(11);
    });

    it("should return the predicted time based on the Riegel formula using same distance units", () => {
      const predictedTime = timePredictionRiegel(
        { hours: 1, minutes: 4, seconds: 0 },
        21097.5,
        DistanceUnit.Meters,
        42195,
        DistanceUnit.Meters
      );

      expect(predictedTime).not.toBeNull();
      expect(predictedTime?.hours).toEqual(2);
      expect(predictedTime?.minutes).toEqual(13);
      expect(predictedTime?.seconds).toEqual(26);
    });

    it("should return null if either the predicted distance is less than or equal to 0", () => {
      const predictedTime = timePredictionRiegel(
        { hours: 1, minutes: 4, seconds: 0 },
        20000,
        DistanceUnit.Meters,
        0,
        DistanceUnit.Meters
      );

      expect(predictedTime).toBeNull();
    });

    it("should return null if either the achieved distance is less than or equal to 0", () => {
      const predictedTime = timePredictionRiegel(
        { hours: 1, minutes: 4, seconds: 0 },
        0,
        DistanceUnit.Meters,
        42195,
        DistanceUnit.Meters
      );

      expect(predictedTime).toBeNull();
    });

    it("should return null if the achieved time is not valid", () => {
      const predictedTime = timePredictionRiegel(
        { hours: -1, minutes: 4, seconds: 0 },
        10,
        DistanceUnit.Meters,
        42195,
        DistanceUnit.Meters
      );

      expect(predictedTime).toBeNull();
    });
  });
});
