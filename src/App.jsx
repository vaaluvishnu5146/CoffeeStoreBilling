import { useState, useLayoutEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BillingComponent from "./Layouts/BillingComponent";
import useTheme from "./hooks/useTheme";

function App() {
  const [theme, setTheme] = useTheme();

  useLayoutEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme(e) {
    e.preventDefault();

    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <BillingComponent />
    </>
  );
}

export default App;
