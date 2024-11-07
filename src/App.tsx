import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Landing/Home";
import BrowseJobList from "./pages/Landing/BrowseJobList";
import NewLayout from "./pages/theme/NewLayout";
import AuthLayout from "./components/AuthLayout";
import Landing from "./components/LandingLayout";
import Resume from "./pages/candidate/Resume";
import About from "./pages/Landing/About";
import Profile from "./pages/candidate/Profile";
import { AppliedJobs } from "./pages/candidate/AppliedJobs";
import CandidateLayout from "./components/CandidateLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLayout />}>
          {/* <Route index element={<Dashboard />} /> */}
        </Route>

        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="browse-jobs" element={<BrowseJobList />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="/home" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="/home/browse-job-list" element={<BrowseJobList />} />
        </Route>

        <Route path="/candidate" element={<CandidateLayout />}>
          <Route index element={<Profile />} />
          <Route path="/candidate/my-resume" element={<Resume />} />
          <Route path="/candidate/applied-jobs" element={<AppliedJobs />} />
          {/* <Route path="saved-jobs" element={<SavedJobs />} />
          <Route path="applied-jobs" element={<AppliedJobs />} />
          <Route path="job-alerts" element={<JobAlerts />} />
          <Route path="cv-manager" element={<CVManager />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="logout" element={<Logout />} /> */}
        </Route>

        <Route path="/my-account" element={<AuthLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
