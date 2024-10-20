import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex lg:flex-row flex-col flex-1 bg-gray-50">
      <Sidebar />
      <main className="w-full min-h-[200vh] p-4">
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
