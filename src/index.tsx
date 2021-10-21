import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultsContextProvider } from "./contexts/ResultContextProvider";
import "./index.css";
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <ResultsContextProvider>
      <Router>
        <App />
      </Router>
    </ResultsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
