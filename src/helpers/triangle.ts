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
  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    return TriangleType.Unknown;
  }
  if (sideA === sideB && sideB === sideC) {
    return TriangleType.Equilateral;
  }
  if (sideA === sideB || sideB === sideC || sideA === sideC) {
    return TriangleType.Isosceles;
  }
  return TriangleType.Scalene;
}
