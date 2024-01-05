import React from "react";
import ReactDOM from "react-dom/client";
import CompleteTest from "./CompleteTest.tsx";
import { WellRoundedUI } from "well-rounded-ui";

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
      <CompleteTest />
    </WellRoundedUI>
  </React.StrictMode>
);
