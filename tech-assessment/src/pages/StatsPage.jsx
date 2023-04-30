import NavigationTab from "../components/NavigationTab";
import SubjectProgress from "../components/SubjectProgress";
import MenuTab from "../components/MenuTab";

function StatsPage() {
  return (
    <div className="container w-full">
      <NavigationTab title="Skills" icon="..." />
      <SubjectProgress />
      <MenuTab />
    </div>
  );
}

export default StatsPage;
