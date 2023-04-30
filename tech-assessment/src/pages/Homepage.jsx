import LeaderboardProfile from "../components/LeaderboardProfile";
import MenuTab from "../components/MenuTab";
import NavigationTab from "../components/NavigationTab";
import SubjectModule from "../components/SubjectModule";
import SummaryCard from "../components/SummaryCard";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="container w-full overflow-hidden">
      <SummaryCard />
      <NavigationTab
        title="Your lesson"
        icon={<ChevronRightIcon className="h-6 w-6 text-main" />}
        border
      />
      <SubjectModule />
      <NavigationTab
        title="Leaderboard"
        icon={<ChevronRightIcon className="h-6 w-6 text-main" />}
        border
      />
      <LeaderboardProfile />
      <MenuTab />
    </div>
  );
}

export default HomePage;
