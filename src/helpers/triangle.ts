export enum TriangleType {
  Equilateral = "Equilateral",
  Isosceles = "Isosceles",
  Scalene = "Scalene",
  Unknown = "Unknown",
}

export function getTypeOfTriangle(
  sideA: number,
  sideB: number,
  sideC: number
): TriangleType {
  return TriangleType.Unknown;
}
