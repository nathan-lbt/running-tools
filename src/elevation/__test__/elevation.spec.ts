import { calculateSlope, calculateElevation } from "../elevation";

describe("calculateSlope", () => {
  it("should calculate the slope correctly", () => {
    expect(calculateSlope(100, 50)).toBe(50);
    expect(calculateSlope(100, -50)).toBe(-50);
    expect(calculateSlope(-100, 0)).toBe(null);
    expect(calculateSlope(0, 0)).toBe(null);
  });
});

describe("calculateElevation", () => {
  it("should calculate the elevation correctly", () => {
    expect(calculateElevation(100, 50)).toBe(50);
    expect(calculateElevation(100, -50)).toBe(-50);
    expect(calculateElevation(-100, 0)).toBe(null);
    expect(calculateElevation(0, 0)).toBe(null);
  });
});
