import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./component/home";
import Department from "./component/department";
import Employee from "./component/employee";
import Layout from "./component/layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/department" element={<Department />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
