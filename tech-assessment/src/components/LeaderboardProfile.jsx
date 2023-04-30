import Image from "../assets/image.png";

function LeaderboardProfile() {
  const leaderbooardArray = [
    {
      avatar: Image,
      altText: "alt text",
      fullName: "Yasmine Lee",
      country: "Taiwan",
      stat: "&#x1F525; 1230",
    },
    {
      avatar: Image,
      altText: "alt text",
      fullName: "Guy Hawkins",
      country: "Spain",
      stat: "&#x1F525; 1130",
    },
    {
      avatar: Image,
      altText: "alt text",
      fullName: "Jide Abayomi",
      country: "Nigeria",
      stat: "&#x1F525; 1030",
    },
    {
      avatar: Image,
      altText: "alt text",
      fullName: "Yasmine Rosh",
      country: "Tokyo",
      stat: "&#x1F525; 930",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-5 overflow-scroll mb-24">
      {leaderbooardArray.map((leader) => {
        return (
          <div className="bg-white flex p-5 flex-row justify-between items-center rounded-3xl gap-28">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="border-solid rounded-full w-12 h-12 p-px border-secondary border-2">
                <img
                  className="text-black rounded-full h-full w-full"
                  src={leader.avatar}
                  alt={leader.altText}
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-x-2">
                <h3 className="text-black">{leader.fullName}</h3>
                <h4 className="text-black">{leader.country}</h4>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <h3 className="text-green-700 text-lg">&#8593;</h3>
              <span
                className="text-secondary font-medium text-xs"
                dangerouslySetInnerHTML={{ __html: leader.stat }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LeaderboardProfile;
