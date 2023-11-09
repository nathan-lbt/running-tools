import { speedToPace } from "../speedToPace";

describe("speedToPace", () => {
  it("returns correct pace", () => {
    const pace = speedToPace(11);
    expect(pace).not.toBe(null);
    expect(pace?.minutes).toBe(5);
    expect(pace?.seconds).toBe(27);
  });

  describe("returns null", () => {
    it("if speed equals 0", () => {
      const pace = speedToPace(0);
      expect(pace).toBe(null);
    });

    it("if speed is negative", () => {
      const pace = speedToPace(-11);
      expect(pace).toBe(null);
    });
  });
});