import {
  BookOpenIcon,
  PencilSquareIcon,
  SpeakerWaveIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";

function SubjectProgress() {
  const subjects = [
    {
      id: 1,
      icon: <BookOpenIcon className="h-6 w-6" />,
      name: "Reading",
      progress: 100,
      status: "Completed",
    },
    {
      id: 1,
      icon: <PencilSquareIcon className="h-6 w-6" />,
      name: "Writing",
      progress: 85,
      status: "Good work",
    },
    {
      id: 1,
      icon: <SpeakerWaveIcon className="h-6 w-6" />,
      name: "Speaking",
      progress: 100,
      status: "Completed",
    },
    {
      id: 1,
      icon: <MicrophoneIcon className="h-6 w-6" />,
      name: "Listening",
      progress: 75,
      status: "Good work",
    },
    {
      id: 1,
      icon: <MicrophoneIcon className="h-6 w-6" />,
      name: "Listening",
      progress: 70,
      status: "Good work",
    },
    {
      id: 1,
      icon: <BookOpenIcon className="h-6 w-6" />,
      name: "Reading",
      progress: 100,
      status: "Completed",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5 px-5 overflow-scroll mb-24">
      {subjects.map((subject) => {
        return (
          <div className="bg-white flex flex-col justify-center items-center py-4 gap-3 rounded-2xl">
            <div className="rounded-full h-14 w-14 bg-main text-white flex justify-center items-center">
              <div>{subject.icon}</div>
            </div>
            <h2 className="text-black font-medium">{subject.name}</h2>
            <h2 className="text-gray-400 text-base font-light">
              {subject.progress}%
            </h2>
            {subject.progress < 100 ? (
              <h2 className="text-secondary bg-white text-sm font-medium px-4 py-1 border border-solid border-secondary rounded-3xl gap-2">
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
