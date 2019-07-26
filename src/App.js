import React from "react";
import "./../node_modules/bootstrap";
import Header from "./components/Header";
import FormEntidade from "./pages/Main";
import Footer from "./components/Footer";
import "./styles.css";
import "bootstrap-material-design";

const App = () => (
  <div className="App">
    <Header />
    <FormEntidade />
    <Footer />
  </div>
);

export default App;
