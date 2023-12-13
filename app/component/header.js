import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="flex py-8 items-center justify-between border-black border-b">
        <img src="/Logo.png" className="h-9"></img>

        <div className="flex gap-10 text-gray-400">
          <Link href="/">
            <p>Home</p>
          </Link>

          <Link href="/blog">
            <p>Blog</p>
          </Link>

          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </div>

        <div className="rounded-xl bg-[#F4F4F5] p-2 flex items-center">
          <input placeholder="Search" className="bg-[#F4F4F5] " />
          <img src="search.png" className="w-4 h-4"></img>
        </div>
      </div>
    </>
  );
};
