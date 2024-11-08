import { Home, User, Briefcase, FileText } from "lucide-react";

export const menuItems = [
  {
    label: "Home",
    link: "/",
    icon: Home,
  },
  {
    label: "Find Jobs",
    link: "/find-Jobs",
    icon: Home,
  },
  {
    label: "For Candidate",
    link: "#",
    icon: User,
    subItems: [
      {
        label: "My Resume",
        link: "/candidate",
        icon: FileText,
      },
      {
        label: "Applied Jobs",
        link: "/candidate/my-jobs",
        icon: Briefcase,
      },
    ],
  },
  {
    label: "For Employers",
    link: "#",
    icon: Briefcase,
    subItems: [
      {
        label: "Post a Job",
        link: "/employer",
        icon: FileText,
      },
      {
        label: "Browse Candidates",
        link: "/browse-candidates",
        icon: User,
      },
    ],
  },
  {
    label: "About",
    link: "/about",
    icon: FileText,
  },
];
