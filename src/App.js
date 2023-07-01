import React from "react";
import Header from "./components/Header/Header";
import { GlobalStayles } from "./components/GlobalStyles";
import { GlobalFonts } from "./components/GlobalFonts";

function App() {
  return (
    <>
      <GlobalStayles/>
      <GlobalFonts/>
      <Header/>
    </>
  );
}

export default App;
