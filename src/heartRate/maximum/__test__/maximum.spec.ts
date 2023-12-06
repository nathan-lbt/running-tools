import {
  maxHeartRateGellishAl,
  maxHeartRateHaskellFox,
  maxHeartRateGellishColl,
} from "../maximum";

describe("Max Heart Rate Calculations", () => {
  describe("maxHeartRateGellishAl", () => {
    it("should calculate the maximum heart rate using the Gellish and Al formula", () => {
      expect(maxHeartRateGellishAl(20)).toBe(193);
    });

    it("should return null if the age is not a positive number", () => {
      expect(maxHeartRateGellishAl(-1)).toBeNull();
      expect(maxHeartRateGellishAl(0)).toBeNull();
    });
  });

  describe("maxHeartRateHaskellFox", () => {
    it("should calculate the maximum heart rate using the Haskell and Fox formula", () => {
      expect(maxHeartRateHaskellFox(20)).toBe(200);
    });

    it("should return null if the age is not a positive number", () => {
      expect(maxHeartRateHaskellFox(-1)).toBeNull();
      expect(maxHeartRateHaskellFox(0)).toBeNull();
    });
  });

  describe("maxHeartRateGellishColl", () => {
    it("should calculate the maximum heart rate using the Gellish and Coll formula", () => {
      expect(maxHeartRateGellishColl(20)).toBe(189.2);
    });

    it("should return null if the age is not a positive number", () => {
      expect(maxHeartRateGellishColl(-1)).toBeNull();
      expect(maxHeartRateGellishColl(0)).toBeNull();
    });
  });
});
