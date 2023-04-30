function SummaryCard() {
  return (
    <div className="px-5 mt-7">
      <div className=" flex flex-row  justify-between items-center">
        <div className="flex flex-col">
          <span className="text-black text-lg">Hello Rachel,</span>
          <h2 className="text-main text-xl font-medium">
            Ready to <span className="text-secondary">play English?</span>
          </h2>
        </div>
        <div className="bg-white flex flex-row justify-between items-center gap-1.5 py-[5px] px-[7px] rounded-2xl">
          {/* <i class="fa-sharp fa-light fa-fire" style="color: #ff784e;"></i> */}
          <div className="text-black border-solid border border-secondary rounded-full w-6 h-6 px-[3px] text-base">
            &#x1F525;
          </div>
          <p className="text-black font-medium text-base">65</p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center rounded-2xl gap-5 bg-white border-2 border-main border-solid  mt-7">
        <div className="flex flex-col items-center justify-center gap-1.5 py-4">
          <h2 className="text-main text-sm font-normal">Today's goal</h2>
          <div
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <div className="flex flex-col items-start justify-center ">
          <h2 className="text-black text-xl font-medium">Excellent!</h2>
          <p className="text-black py-2 text-base font-light">
            You're almost there.
            <br />
            Finish the goal to achieve
            <br />
            <span className="text-secondary font-medium">&#x1F525; 10</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
