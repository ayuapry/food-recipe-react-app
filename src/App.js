import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { HeadlineCards } from "./components/HeadlineCards";
import { Content } from "./components/Content";
import { Category } from "./components/Category";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HeadlineCards />
      <Content />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
