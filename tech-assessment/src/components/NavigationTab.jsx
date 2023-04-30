function NavigationTab({ title, icon, border }) {
  return (
    <div className="flex justify-between items-center flex-row my-5 p-5">
      <h2 className="text-black font-medium text-2xl">{title}</h2>
      {border ? (
        <div className="border-solid border-main rounded-lg py-0.5 px-1 border">
          {icon}
        </div>
      ) : (
        <div>{icon}</div>
      )}
    </div>
  );
}

export default NavigationTab;
