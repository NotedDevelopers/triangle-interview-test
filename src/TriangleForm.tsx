import React from "react";

export const TriangleForm = () => {
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
