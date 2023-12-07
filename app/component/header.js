export const Header = () => {
  return (
    <>
      <div className="flex py-8 items-center justify-between border-black border-b">
        <img src="/Logo.png" className="h-9"></img>

        <div className="flex gap-4 text-gray-400">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        <div className="rounded-xl bg-[#F4F4F5] p-2 flex items-center">
          <input placeholder="Search" className="bg-[#F4F4F5] " />
          <img src="search.png" className="w-4 h-4"></img>
        </div>
      </div>
    </>
  );
};
