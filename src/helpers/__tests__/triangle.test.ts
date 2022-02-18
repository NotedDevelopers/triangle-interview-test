import { getTypeOfTriangle, TriangleType } from "../triangle";

describe("test triangle type function", () => {
  test("it is equilateral", () => {
    const result = getTypeOfTriangle(5, 5, 5);
    expect(result).toBe(TriangleType.Equilateral);
  });
  test("it is scalene", () => {
    const result = getTypeOfTriangle(1, 2, 3);
    expect(result).toBe(TriangleType.Scalene);
  });
  test("it is isosceles", () => {
    const result = getTypeOfTriangle(1, 1, 3);
    expect(result).toBe(TriangleType.Isosceles);
  });
  test("it is unknown", () => {
    const result = getTypeOfTriangle(-1, 1, 3);
    expect(result).toBe(TriangleType.Unknown);
  });
});
