import {
  calculateHeartRateZonesUsingKarvonen,
  calculateHeartRateZonesUsingMax,
} from "../heartRateZones";

describe("calculateHeartRateZones", () => {
  it("should return an array of 5 heart rate zones", () => {
    const maxHeartRate = 180;
    const restingHeartRate = 60;
    const zones = calculateHeartRateZonesUsingKarvonen(
      maxHeartRate,
      restingHeartRate
    );
    expect(zones).toHaveLength(5);
  });

  it("should return the correct heart rate zones", () => {
    const maxHeartRate = 180;
    const restingHeartRate = 60;
    const zones = calculateHeartRateZonesUsingKarvonen(
      maxHeartRate,
      restingHeartRate
    );
    expect(zones).not.toBeNull();
    expect(zones?.[0]).toEqual({
      index: 1,
      minPercentage: 0.5,
      maxPercentage: 0.6,
      minHeartRate: 120,
      maxHeartRate: 132,
    });
    expect(zones?.[1]).toEqual({
      index: 2,
      minPercentage: 0.6,
      maxPercentage: 0.7,
      minHeartRate: 132,
      maxHeartRate: 144,
    });
    expect(zones?.[2]).toEqual({
      index: 3,
      minPercentage: 0.7,
      maxPercentage: 0.8,
      minHeartRate: 144,
      maxHeartRate: 156,
    });
    expect(zones?.[3]).toEqual({
      index: 4,
      minPercentage: 0.8,
      maxPercentage: 0.9,
      minHeartRate: 156,
      maxHeartRate: 168,
    });
    expect(zones?.[4]).toEqual({
      index: 5,
      minPercentage: 0.9,
      maxPercentage: 1,
      minHeartRate: 168,
      maxHeartRate: 180,
    });
  });
});

const x = [
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

describe("calculateHeartRateZonesUsingMax", () => {
  it("should return an array of 5 heart rate zones", () => {
    const maxHeartRate = 180;
    const zones = calculateHeartRateZonesUsingMax(maxHeartRate);
    expect(zones).toHaveLength(5);
  });

  it("should return the correct heart rate zones", () => {
    const maxHeartRate = 180;
    const zones = calculateHeartRateZonesUsingMax(maxHeartRate);
    expect(zones).not.toBeNull();
    expect(zones?.[0]).toEqual({
      index: 1,
      minPercentage: 0.5,
      maxPercentage: 0.6,
      minHeartRate: 90,
      maxHeartRate: 108,
    });
    expect(zones?.[1]).toEqual({
      index: 2,
      minPercentage: 0.6,
      maxPercentage: 0.7,
      minHeartRate: 108,
      maxHeartRate: 126,
    });
    expect(zones?.[2]).toEqual({
      index: 3,
      minPercentage: 0.7,
      maxPercentage: 0.8,
      minHeartRate: 126,
      maxHeartRate: 144,
    });
    expect(zones?.[3]).toEqual({
      index: 4,
      minPercentage: 0.8,
      maxPercentage: 0.9,
      minHeartRate: 144,
      maxHeartRate: 162,
    });
    expect(zones?.[4]).toEqual({
      index: 5,
      minPercentage: 0.9,
      maxPercentage: 1,
      minHeartRate: 162,
      maxHeartRate: 180,
    });
  });
});
