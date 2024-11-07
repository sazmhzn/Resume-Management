import Header from "./candidate/Header";
import ProfileCard from "./candidate/ProfileCard";
import { Outlet } from "react-router-dom";

const CandidateLayout = () => {
  return (
    <section className="min-h-screen">
      <Header />
      <div className="p-4 max-w-7xl mx-auto grid md:grid-cols-[200px_1fr] gap-4">
        <aside className="">
          <ProfileCard />
        </aside>
        <Outlet />
      </div>
    </section>
  );
};

export default CandidateLayout;
