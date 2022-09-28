import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { HeadlineCards } from "./components/HeadlineCards";
import { Content } from "./components/Content";
import { Category } from "./components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HeadlineCards />
      <Content />
      <Category />
    </div>
  );
}

export default App;
