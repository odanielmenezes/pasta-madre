import React from "react";
import HomePage from "./views/home/index";
import { SenderEmail } from "./components/form-email/component";

export function App() {
  return (
    <>
      <HomePage />
      <SenderEmail />
    </>
  );
}
