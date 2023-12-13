"use client";
import { useState, useEffect } from "react";
export default function Contact() {
  function Profile() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`https://dev.to/api/articles?per_page=9`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No profile data</p>;
    console.log(data);

    return (
      <>
        <div className="text-gray-500 flex flex-col gap-10 w-[60%] py-[100px] m-auto">
          <h1 className="font-bold text-black">Contact Us</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>

          <div className="flex gap-10 w-full">
            <div className="border border-gray-200 w-[50%] rounded-lg p-4 flex flex-col gap-4">
              <h1 className="font-bold text-black">Address</h1>
              <p>
                1328 Oak Ridge Drive, Saint <br></br> Louis, Missouri
              </p>
            </div>
            <div className="border border-gray-200 w-[50%] rounded-lg p-4 flex flex-col gap-4">
              <h1 className="font-bold text-black">Contact</h1>
              <p>
                313-332-8662 <br></br> info@email.com
              </p>
            </div>
          </div>

          <div className=" flex flex-col gap-4 bg-slate-100 pr-[100px] py-[40px] pl-[40px] rounded-xl bg-gray-100 w-full">
            <h1 className="font-bold text-black">Levave a Message</h1>

            <div className="flex gap-4">
              <input
                placeholder="Your Name"
                className="border border-gray-200 rounded w-[50%] py-[5px] pl-[10px]"
              />
              <input
                placeholder="Your Email"
                className="border border-gray-200  rounded w-[50%] py-[5px] pl-[10px]"
              />
            </div>

            <input
              placeholder="Subject"
              className="border border-gray-200 rounded w-full py-[5px] pl-[10px]"
            />
            <textarea
              placeholder="Write a Message"
              className="border border-gray-200 rounded-xl w-full pt-[10px] pl-[10px]"
              style={{ resize: "none" }}
              rows="5"
            />

            <button className="bg-blue-500 text-white p-2 w-fit rounded">
              Send Message
            </button>
          </div>
        </div>
      </>
    );
  }
  return <Profile />;
}
