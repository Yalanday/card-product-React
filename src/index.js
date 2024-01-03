import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "/src/theme/defaultTheme";
import App from "/src/app/app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
);
