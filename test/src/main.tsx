import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore
import { WellRoundedUI } from "well-rounded-ui";
// import CompleteTest from "./CompleteTest.tsx";
import SingleTest from "./SingleTest.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WellRoundedUI
      options={{
        colors: {
          primary: "#2a9d8f",
          secondary: "#264653",
          success: "#a7c957",
          warning: "#e9c46a",
          danger: "#e76f51",
          default: "#d6ccc2"
        }
      }}
    >
      <SingleTest />
    </WellRoundedUI>
  </React.StrictMode>
);
