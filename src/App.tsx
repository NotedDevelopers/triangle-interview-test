import React from "react";
import "./App.css";
import { TriangleForm } from "./TriangleForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Triangle app</h2>
        <div
          style={{
            display: "grid",
            columnGap: 2,
            gridTemplateColumns: "1fr auto",
          }}
        >
          <TriangleForm />
        </div>
      </header>
    </div>
  );
}

export default App;
