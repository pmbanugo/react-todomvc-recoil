import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { RecoilRoot } from "recoil";
import "todomvc-app-css/index.css";

render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
