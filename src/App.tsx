import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPageLayout from "./pages/auth/AuthPageLayout";
import Dashboard from "./pages/Dashbaord";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Landing/Home";
import BrowseJobList from "./pages/Landing/BrowseJobList";
import NewLayout from "./pages/theme/NewLayout";
import JobProfile from "./pages/Landing/JobProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/home" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="/home/browse-job-list" element={<BrowseJobList />} />
          <Route path="/home/job-profile" element={<JobProfile />} />
        </Route>
        <Route path="/my-account" element={<AuthPageLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
