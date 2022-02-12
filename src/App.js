import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
