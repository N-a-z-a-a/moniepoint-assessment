import NavigationTab from "../components/NavigationTab";
import SubjectProgress from "../components/SubjectProgress";
import MenuTab from "../components/MenuTab";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

function Date() {
  const dates = [
    {
      date: 2,
      day: "Mon",
    },
    {
      date: "&#10003;",
      day: "Tue",
    },
    {
      date: "&#10003;",
      day: "Wed",
    },
    {
      date: 5,
      day: "Thurs",
    },
    {
      date: 6,
      day: "Fri",
    },
    {
      date: 7,
      day: "Sat",
    },
    {
      date: 8,
      day: "Sun",
    },
  ];

  return dates.map((date) => {
    return (
      <div className="flex flex-col justify-center items-center gap-2">
        <div
          className={
            date.date === 5
              ? "flex justify-center items-center h-5 w-5 rounded-full text-white bg-secondary p-5"
              : date.date === "&#10003;"
              ? "flex justify-center items-center h-5 w-5 rounded-full text-white bg-main p-5"
              : "flex justify-center items-center h-5 w-5 rounded-full text-main bg-white p-5"
          }
          dangerouslySetInnerHTML={{ __html: date.date }}
        />
        <h2 className={date.date === 5 ? "text-secondary" : "text-black"}>
          {date.day}
        </h2>
      </div>
    );
  });
}

function StatsPage() {
  return (
    <div className="container w-full">
      <div className="flex justify-between items-center flex-row my-5 p-5">
        <div className="border-solid border-main rounded-lg py-0.5 px-1 border">
          <ChevronLeftIcon className="h-6 w-6 text-main" />
        </div>
        <h2 className="text-black font-medium text-2xl">September</h2>
        <div className="border-solid border-main rounded-lg py-0.5 px-1 border">
          <ChevronRightIcon className="h-6 w-6 text-main" />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 px-5">
        <Date />
      </div>
      <NavigationTab
        title="Skills"
        icon={<EllipsisHorizontalIcon className="h-6 w-6 text-main" />}
      />
      <SubjectProgress />
      <MenuTab />
    </div>
  );
}

export default StatsPage;
