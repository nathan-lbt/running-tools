import {
  METERS_IN_KILOMETER,
  METERS_IN_MILE,
  KILOMETERS_IN_MILE,
} from "../../consts";
import {
  kilometersToMeters,
  kilometersToMiles,
  metersToKilometers,
  metersToMiles,
  milesToKilometers,
  milesToMeters,
} from "../distance";

describe("distance conversions", () => {
  it("converts meters to kilometers", () => {
    expect(metersToKilometers(METERS_IN_KILOMETER)).toEqual(1);
  });
  it("converts meters to miles", () => {
    expect(metersToMiles(METERS_IN_MILE)).toEqual(1);
  });

  it("converts a kilometer distance to miles", () => {
    expect(kilometersToMiles(KILOMETERS_IN_MILE)).toEqual(1);
  });
  it("converts a kilometer distance to meters", () => {
    expect(kilometersToMeters(1)).toEqual(METERS_IN_KILOMETER);
  });

  it("converts a mile distance to kilometers", () => {
    expect(milesToKilometers(1)).toEqual(KILOMETERS_IN_MILE);
  });
  it("converts a mile distance to meters", () => {
    expect(milesToMeters(1)).toEqual(METERS_IN_MILE);
  });
});
