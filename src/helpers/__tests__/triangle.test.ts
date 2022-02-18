import { getTypeOfTriangle, TriangleType } from "../triangle";

describe("test triangle type function", () => {
  test("it is equilateral", () => {
    const result = getTypeOfTriangle(5, 5, 5);
    expect(result).toBe(TriangleType.Equilateral);
  });
});
