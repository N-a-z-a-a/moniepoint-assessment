import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

function MenuTab() {
  let location = useLocation();

  return (
    <div className="flex flex-row justify-around items-center bg-white px-5 py-7 rounded-t-3xl w-full fixed bottom-0 menu-tab">
      <Link
        to={`/`}
        className={`${
          location.pathname === "/" ? "text-main" : "text-gray-500"
        }`}
      >
        <div>
          <HomeIcon className="h-6 w-6" />
        </div>
      </Link>
      <Link
        to={`/stats`}
        className={`${
          location.pathname === "/stats" ? "text-main" : "text-gray-500"
        }`}
      >
        <div>
          <ChartBarIcon className="h-6 w-6" />
        </div>
      </Link>
      <Link to={``} className="text-gray-500">
        <div>
          <UserGroupIcon className="h-6 w-6 text-gray-500" />
        </div>
      </Link>
      <Link to={``} className="text-gray-500">
        <div>
          <Cog6ToothIcon className="h-6 w-6 text-gray-500" />
        </div>
      </Link>
    </div>
  );
}

export default MenuTab;
