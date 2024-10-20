import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cn } from "@/lib/utils";
import { HomeIcon } from "@radix-ui/react-icons";
import {
  ActivityIcon,
  GlobeIcon,
  LayoutGridIcon,
  MenuIcon,
  UsersIcon,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    title: "HOME",
    links: [
      {
        name: "Dashboard",
        path: "/",
        icon: <HomeIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    title: "UTILITIES",
    links: [
      {
        name: "Typography",
        path: "/typography",
        icon: <LayoutGridIcon className="w-6 h-6" />,
      },
      {
        name: "Shadow",
        path: "/shadow",
        icon: <ActivityIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    title: "AUTH",
    links: [
      {
        name: "Login",
        path: "/login",
        icon: <UsersIcon className="w-6 h-6" />,
      },
      {
        name: "Register",
        path: "/register",
        icon: <UsersIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    title: "EXTRA",
    links: [
      {
        name: "Icons",
        path: "/icons",
        icon: <ActivityIcon className="w-6 h-6" />,
      },
      {
        name: "Sample Page",
        path: "/sample",
        icon: <ActivityIcon className="w-6 h-6" />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside
      className={cn("sticky top-0 z-10 bg-red-400 max-h-screen w-full lg:w-64")}
    >
      <div className="flex w-full">
        <div className="hidden h-screen lg:block lg:p-4 lg:w-64 lg:shrink-0 lg:border-r lg:bg-white dark:lg:bg-gray-800">
          <Link to={"/"} className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-semibold text-lg">Baby</h1>
          </Link>
          <div className="flex h-full flex-col justify-between py-6">
            <ul className="space-y-0 font-medium">
              {navLinks.map((section, index) => (
                <li key={index} className="py-2 ">
                  <h4 className="text-xs py-2 text-slate-600 ">
                    {section.title}
                  </h4>
                  {section.links.map((link, idx) => (
                    <NavLink
                      to={link.path}
                      key={idx}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center font-normal px-2 py-3 text-base text-slate-400 rounded-lg dark:text-white group", // Base classes
                          {
                            "hover:bg-blue-50 hover:text-blue-400 dark:hover:bg-gray-700":
                              !isActive, // Inactive state classes
                            "bg-blue-500 text-white dark:bg-gray-700 dark:text-blue-300":
                              isActive, // Active state classes
                          }
                        )
                      }
                    >
                      {link.icon}
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        {link.name}
                      </span>
                    </NavLink>
                  ))}
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <Button variant="outline" size="lg" className="w-full">
                Upgrade to Pro
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <GlobeIcon className="h-5 w-5" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <header className="sticky top-0 z-10 border-b bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900 lg:hidden">
            <div className="flex items-center justify-between">
              {/* <Link to={"/"} className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="font-semibold text-lg">Baby</h1>
              </Link> */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <div className="flex h-full flex-col justify-between py-6">
                    <div className="space-y-4">
                      <Link to={"/"} className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h1 className="font-semibold text-lg">Baby</h1>
                      </Link>
                      <ul className="space-y-0 font-medium">
                        {navLinks.map((section, index) => (
                          <li key={index} className="py-2 ">
                            <h4 className="text-xs py-2 text-slate-600 ">
                              {section.title}
                            </h4>
                            {section.links.map((link, idx) => (
                              <NavLink
                                to={link.path}
                                key={idx}
                                className={({ isActive }) =>
                                  cn(
                                    "flex items-center font-normal px-2 py-3 text-base text-slate-400 rounded-lg dark:text-white group", // Base classes
                                    {
                                      "hover:bg-blue-50 hover:text-blue-400 dark:hover:bg-gray-700":
                                        !isActive, // Inactive state classes
                                      "bg-blue-500 text-white dark:bg-gray-700 dark:text-blue-300":
                                        isActive, // Active state classes
                                    }
                                  )
                                }
                              >
                                {link.icon}
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                  {link.name}
                                </span>
                              </NavLink>
                            ))}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="">
                      <Button variant="outline" size="sm" className="w-full">
                        Upgrade to Pro
                      </Button>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <GlobeIcon className="h-5 w-5" />
                        <span>English</span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </header>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
