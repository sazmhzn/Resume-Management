import { Home, User, Briefcase, FileText } from "lucide-react";

export const menuItems = [
  {
    label: "Home",
    link: "/home",
    icon: Home,
  },
  {
    label: "For Candidate",
    link: "#",
    icon: User,
    subItems: [
      {
        label: "My Resume",
        link: "/home/job-profile",
        icon: FileText,
      },
      {
        label: "Jobs",
        link: "/jobs",
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
        link: "/post-job",
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
    label: "Blogs",
    link: "/blogs",
    icon: FileText,
  },
];
