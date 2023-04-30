function SubjectProgress() {
  const subjects = [
    {
      id: 1,
      icon: "icon",
      name: "Reading",
      progress: 100,
      status: "Completed",
    },
    {
      id: 1,
      icon: "icon",
      name: "Reading",
      progress: 80,
      status: "Good work",
    },
    {
      id: 1,
      icon: "icon",
      name: "Reading",
      progress: 100,
      status: "Completed",
    },
    {
      id: 1,
      icon: "icon",
      name: "Reading",
      progress: 75,
      status: "Good work",
    },
    {
      id: 1,
      icon: "icon",
      name: "Reading",
      progress: 75,
      status: "Good work",
    },
    {
      id: 1,
      icon: "icon",
      name: "Reading",
      progress: 100,
      status: "Completed",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5 px-5 overflow-scroll">
      {subjects.map((subject) => {
        return (
          <div className="bg-white flex flex-col justify-center items-center py-4 gap-3 rounded-2xl">
            <div className="rounded-full h-14 w-14 bg-main text-white flex justify-center items-center">
              {subject.icon}
            </div>
            <h2 className="text-black font-medium">{subject.name}</h2>
            <h2 className="text-gray-400 text-base font-light">
              {subject.progress}%
            </h2>
            {subject.progress < 100 ? (
              <h2 className="text-secondary bg-white text-sm px-4 py-1 border border-solid border-secondary rounded-3xl gap-2">
                {subject.status}
              </h2>
            ) : (
              <h2 className="text-white bg-secondary text-sm px-4 py-1 border border-solid border-secondary rounded-3xl gap-2">
                {subject.status}
              </h2>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SubjectProgress;