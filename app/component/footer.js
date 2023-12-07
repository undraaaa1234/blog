export const Footer = () => {
  return (
    <>
      <div className="w-full text-gray-400 py-8 flex flex-col gap-6 border-black border-t">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-black">About</h1>

            <p className="w-[250px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>

            <div className="flex flex-col gap-1">
              <p>Email : info@jstemplate.net</p>
              <p>Phone : 880 123 456 789</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>

          <div className="flex gap-4">
            <img src="Vector.png" className="w-4 h-4"></img>
            <img src="twitter.png" className="w-4 h-4"></img>
            <img src="Negative.png" className="w-4 h-4"></img>
            <img src="in.png" className="w-4 h-4"></img>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-gray-300 py-8">
          <div className="flex gap-3">
            <img src="B.png" className="h-12"></img>

            <div>
              <img src="MetaBlog.png"></img>
              <p>© All Rights Reserved.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};
