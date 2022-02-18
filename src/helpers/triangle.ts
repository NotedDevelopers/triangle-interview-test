export enum TriangleType {
  Equilateral = "Equilateral",
  Isosceles = "Isosceles",
  Scalene = "Scalene",
  Unknown = "Unknown",
}

export function getTypeOfTriangle(
  a: number,
  b: number,
  c: number
): TriangleType {
  return TriangleType.Unknown;
}
