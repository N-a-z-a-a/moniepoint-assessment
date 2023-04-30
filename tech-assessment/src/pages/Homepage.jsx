import LeaderboardProfile from "../components/LeaderboardProfile";
import MenuTab from "../components/MenuTab";
import NavigationTab from "../components/NavigationTab";
import SubjectModule from "../components/SubjectModule";
import SummaryCard from "../components/SummaryCard";

function HomePage() {
  return (
    <div className="container w-full overflow-hidden">
      <SummaryCard />
      <NavigationTab title="Your lesson" icon=">" />
      <SubjectModule />
      <NavigationTab title="Leaderboard" icon=">" />
      <LeaderboardProfile />
      <MenuTab />
    </div>
  );
}

export default HomePage;
