import Image from "../assets/image.png";

function LeaderboardProfile() {
  const leaderbooardArray = [
    {
      avatar: Image,
      altText: "alt text",
      fullName: "Yasmine Rosh",
      country: "Tokyo",
    },
    {
      avatar: Image,
      altText: "alt text",
      fullName: "Yasmine Rosh",
      country: "Tokyo",
    },
    {
      avatar: Image,
      altText: "alt text",
      fullName: "Yasmine Rosh",
      country: "Tokyo",
    },
    {
      avatar: Image,
      altText: "alt text",
      fullName: "Yasmine Rosh",
      country: "Tokyo",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-5 overflow-scroll">
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
              <h3 className="text-main text-lg">&#8593;</h3>
              <span className="text-secondary font-medium text-xs">
                &#x1F525; 10
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LeaderboardProfile;
