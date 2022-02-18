import React from "react";
import { getTypeOfTriangle } from "./helpers/triangle";

export const TriangleForm = () => {
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Array.from(formData.values());
    const args = formValues.map(Number);
    const triangleType = getTypeOfTriangle(
      ...(args as [number, number, number])
    );
    alert(`${triangleType} triangle`);
  }

  return (
    <form onSubmit={submitForm} className="form">
      <h3>Write the triangle function and spec</h3>
      <div className="fieldset">
        <label htmlFor="sideA">Side A</label>
        <input id="sideA" name="sideA" type="number" />
      </div>
      <div className="fieldset">
        <label htmlFor="sideB">Side B</label>
        <input id="sideB" name="sideB" type="number" />
      </div>
      <div className="fieldset">
        <label htmlFor="sideC">Side C</label>
        <input id="sideC" name="sideC" type="number" />
      </div>
      <button type="submit">Tell me the type</button>
    </form>
  );
};
