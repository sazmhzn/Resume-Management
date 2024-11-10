import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "./pages/Landing/Home";
import BrowseJobList from "./pages/Landing/BrowseJobList";
import NewLayout from "./pages/theme/NewLayout";
import AuthLayout from "./components/AuthLayout";
import Landing from "./components/LandingLayout";
import Resume from "./pages/candidate/Resume";
import About from "./pages/Landing/About";
import Profile from "./pages/candidate/Profile";
import { MyJobs } from "./pages/candidate/MyJobs";
import CandidateLayout from "./components/CandidateLayout";
import EmployerLayout from "./components/EmployerLayout";
import PostJob from "./pages/employer/JobForm";
import CompanyProfile from "./pages/employer/CompanyProfile";
import PageNotFound from "./pages/shared/PageNotFound";
import JobDescription from "./pages/Landing/JobDescription";
import NewHome from "./pages/Landing/NewHome";
import Jobs from "./pages/Landing/Jobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLayout />}>
          {/* <Route index element={<Dashboard />} /> */}
        </Route>

        <Route path="/" element={<Landing />}>
          <Route index element={<NewHome />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="find-jobs" element={<BrowseJobList />} />
          <Route path="browse-jobs" element={<BrowseJobList />} />
          <Route path="job-description" element={<JobDescription />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="/candidate" element={<CandidateLayout />}>
          <Route index element={<Profile />} />
          <Route path="/candidate/my-resume" element={<Resume />} />
          <Route path="/candidate/my-jobs" element={<MyJobs />} />
          <Route path="/candidate/*" element={<PageNotFound />} />
          {/* 
          <Route path="job-alerts" element={<JobAlerts />} />
          <Route path="cv-manager" element={<CVManager />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="logout" element={<Logout />} /> */}
        </Route>

        <Route path="/employer" element={<EmployerLayout />}>
          <Route index element={<CompanyProfile />} />
          <Route path="/employer/post-job" element={<PostJob />} />
          <Route path="/employer/my-resume" element={<Resume />} />
          <Route path="/employer/*" element={<PageNotFound />} />
        </Route>

        <Route path="/my-account" element={<AuthLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
