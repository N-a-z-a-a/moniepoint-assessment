import { Link } from "react-router-dom";

function MenuTab() {
  return (
    <div className="flex flex-row justify-around items-center bg-white px-5 py-7 rounded-t-3xl w-full fixed bottom-0 menu-tab">
      <Link to={`/`} className="text-gray-500">
        HO
      </Link>
      <Link to={`/stats`} className="text-gray-500">
        ST
      </Link>
      <Link to={`/`} className="text-gray-500">
        PE
      </Link>
      <Link to={`/`} className="text-gray-500">
        SE
      </Link>
    </div>
  );
}

export default MenuTab;
