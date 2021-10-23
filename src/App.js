import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/JenniMammi/new-weatherapp-react"
            target="_blank"
          >
            Open-source code
          </a>
          , created by Jenni
        </footer>
      </div>
    </div>
  );
}
