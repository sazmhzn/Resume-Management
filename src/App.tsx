import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard__test from "./pages/Dashboard__test";
import Layout from "./pages/theme/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard__test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
