export const Carousel = () => {
  return (
    <div className="flex flex-col gap-2 py-8 border-b border-black">
      <div className="relative">
        <img src="ania.png"></img>

        <div className="flex flex-col gap-6 bg-white w-fit py-10 pr-40 pl-10 rounded-xl flex-end absolute bottom-2 left-2">
          <h1 className="bg-blue-500 text-white w-fit py-1 px-3 rounded-xl">
            Technology
          </h1>
          <p className="font-bold w-[200px]">
            Grid system for better Design User Interface
          </p>
          <p className="text-gray-400">August 20, 2022</p>
        </div>
      </div>

      <div className="flex place-content-end gap-2">
        <img src="back.png"></img>
        <img src="forward.png"></img>
      </div>
    </div>
  );
};
