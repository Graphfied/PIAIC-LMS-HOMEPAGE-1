import React from "react";
import ReactDOMClient from "react-dom/client";
import { PiaicLmsSecond } from "./screens/PiaicLmsSecond";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PiaicLmsSecond />);
