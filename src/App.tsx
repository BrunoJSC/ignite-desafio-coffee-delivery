import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ShoppingProvider } from "./context/CoffeeCartContext";
import { Router } from "./Routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingProvider>
          <Router />
        </ShoppingProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
