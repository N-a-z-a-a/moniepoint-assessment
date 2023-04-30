import SubjectImage from "../assets/vocabImage.png";

function SubjectModule() {
  const subjectArray = [
    {
      image: {
        src: SubjectImage,
        altText: "Speaking 101",
      },
      completedStatus: "60%",
      courseTitle: "Speaking 101",
      duration: "30 days",
      frequency: "daily",
    },
    {
      image: {
        src: SubjectImage,
        altText: "subject image",
      },
      completedStatus: "60%",
      courseTitle: "New words",
      duration: "90 days",
      frequency: "daily",
    },
    {
      image: {
        src: SubjectImage,
        altText: "subject image",
      },
      completedStatus: "60%",
      courseTitle: "Speaking 101",
      duration: "30 days",
      frequency: "daily",
    },
    {
      image: {
        src: SubjectImage,
        altText: "subject image",
      },
      completedStatus: "60%",
      courseTitle: "Subject Name",
      duration: "30 days",
      frequency: "daily",
    },
    {
      image: {
        src: SubjectImage,
        altText: "subject image",
      },
      completedStatus: "60%",
      courseTitle: "Subject Name",
      duration: "30 days",
      frequency: "daily",
    },
    {
      image: {
        src: SubjectImage,
        altText: "subject image",
      },
      completedStatus: "60%",
      courseTitle: "Subject Name",
      duration: "30 days",
      frequency: "daily",
    },
  ];

  return (
    <div className="flex overflow-scroll pl-5 gap-4">
      {subjectArray.map((subject) => {
        return (
          <div className="flex flex-col justify-center items-start gap-2 min-w-[44%]">
            <div className="bg-white rounded-3xl py-2.5 px-8">
              <img
                className="text-black"
                src={subject.image.src}
                alt={subject.image.altText}
              />
            </div>
            <div className="flex flex-row justify-center items-center gap-1 w-full">
              <div className="h-2 w-full bg-gray-300 rounded-[10px]">
                <div className="h-2 bg-main w-3/5 rounded-[10px]"></div>
              </div>
              <span className="text-black">{subject.completedStatus}</span>
            </div>
            <div className="flex flex-col justify-center items-start gap-px">
              <h3 className="text-black font-medium">{subject.courseTitle}</h3>
              <p className="flex gap-1 text-gray-400 text-sm font-light">
                <span>{subject.duration}</span>{" "}
                <div className=" text-xs font-light h-1 w-1 rounded-full bg-gray-400 self-center"></div>{" "}
                <span>{subject.frequency}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SubjectModule;
