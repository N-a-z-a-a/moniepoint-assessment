function NavigationTab({ title, icon }) {
  return (
    <div className="flex justify-between items-center flex-row my-5 p-5">
      <h2 className="text-black font-medium text-xl">{title}</h2>
      <div className="text-main border-solid border-main rounded-lg py-0.5 px-2 border text-xs">
        {icon}
      </div>
    </div>
  );
}

export default NavigationTab;
