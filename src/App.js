import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Inari" />
        <footer>
          <a
            href="https://github.com/JenniMammi/new-weatherapp-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , created by Jenni
        </footer>
      </div>
    </div>
  );
}
