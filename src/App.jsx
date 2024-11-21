import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import BankProduct from "./components/pages/BankProduct";
import Detail from "./components/pages/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/product" element={<BankProduct />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;
