import { useState } from "react";

export const useSidebarMenuItems = () => {
  const [menuItems, setMenuItems] = useState([
    { label: "My Profile", link: "/candidate", active: true },
    {
      label: "My Resume",
      link: "/candidate/my-resume",
      active: false,
    },
    {
      label: "Saved Jobs",
      link: "/candidate/saved-jobs",
      active: false,
    },
    {
      label: "Applied Jobs",
      link: "/candidate/applied-jobs",
      active: false,
    },
    { label: "Job Alerts", link: "/job-alerts", active: false },
    { label: "CV Manager", link: "/cv-manager", active: false },
    { label: "Change Password", link: "/change-password", active: false },
    { label: "Log Out", link: "/logout", active: false },
  ]);

  const setActiveItem = (index: number) => {
    setMenuItems(
      menuItems.map((item, i) => ({
        ...item,
        active: i === index,
      }))
    );
  };

  return { menuItems, setActiveItem };
};
