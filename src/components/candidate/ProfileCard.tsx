import { useSidebarMenuItems } from "@/hooks/useSidebarMenuItems";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  const { menuItems, setActiveItem } = useSidebarMenuItems();

  return (
    <div className="bg-white rounded-md border border-neutral-600 text-black text-center dark:text-gray-500">
      <h4 className="mb-0 text-xl font-semibold"> Wonajala Maharjan</h4>
      <p className="font-normal">Product Designer</p>

      <ul className="m-0 p-0 text-left">
        {menuItems.map((item, index) => (
          <li
            key={item.label}
            className={`p-2 ml-0 relative ${
              item.active && "bg-blue-100 border-r-4 border-blue-600"
            }`}
          >
            <Link
              to={item.link}
              className={`text-gray-600 w-full block ${
                item.active && "font-bold text-blue-600 w-full"
              }`}
              onClick={() => setActiveItem(index)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
