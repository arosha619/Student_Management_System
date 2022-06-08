import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
