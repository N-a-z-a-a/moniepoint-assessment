import Image from "../assets/image.png";

function SubjectModule() {
  const subjectArray = [
    {
      image: {
        src: Image,
        altText: "subject image",
      },
      completedStatus: "60%",
      courseTitle: "Subject Name",
      duration: "30 days",
      frequency: "daily",
    },
    {
      image: {
        src: Image,
        altText: "subject image",
      },
      completedStatus: "60%",
      courseTitle: "Subject Name",
      duration: "30 days",
      frequency: "daily",
    },
    {
      image: {
        src: Image,
        altText: "subject image",
      },
      completedStatus: "60%",
      courseTitle: "Subject Name",
      duration: "30 days",
      frequency: "daily",
    },
    {
      image: {
        src: Image,
        altText: "subject image",
      },
      completedStatus: "60%",
      courseTitle: "Subject Name",
      duration: "30 days",
      frequency: "daily",
    },
    {
      image: {
        src: Image,
        altText: "subject image",
      },
      completedStatus: "60%",
      courseTitle: "Subject Name",
      duration: "30 days",
      frequency: "daily",
    },
    {
      image: {
        src: Image,
        altText: "subject image",
      },
      completedStatus: "60%",
      courseTitle: "Subject Name",
      duration: "30 days",
      frequency: "daily",
    },
  ];

  return (
    <div className="flex flex-row justify-between items-center overflow-scroll gap-2 pl-5">
      {subjectArray.map((subject) => {
        return (
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="bg-white rounded-3xl py-2.5 px-8">
              <img
                className="text-black"
                src={subject.image.src}
                alt={subject.image.altText}
              />
            </div>
            <div className="flex flex-row justify-center items-center gap-1">
              <div className="h-2 w-20 bg-black rounded-md"></div>
              <span className="text-black">{subject.completedStatus}</span>
            </div>
            <div className="flex flex-col justify-center items-start gap-px">
              <h3 className="text-black">{subject.courseTitle}</h3>
              <p>
                <span className="text-black">{subject.duration}</span>
                <span className="text-black">.</span>
                <span className="text-black">{subject.frequency}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SubjectModule;
