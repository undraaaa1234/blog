"use client";
import { useState, useEffect } from "react";
export const Trending = () => {
  function Profile() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`https://dev.to/api/articles?per_page=4`)
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
      <div>
        <div className="w-full flex flex-col gap-4 py-8 border-b border-black">
          <header className="font-bold">Trending</header>
          <div className="flex gap-4">
            {data.map((item, index) => (
              <div key={index} className="w-1/4 relative h-[400px]">
                <img
                  src={item.social_image}
                  className="rounded-2xl h-[100%]"
                ></img>

                <div className="flex flex-col gap-4 absolute bottom-2 left-2">
                  <h1 className="bg-blue-500 text-white w-fit py-1 px-3 rounded-xl">
                    {item.title}
                  </h1>
                  <p className="font-bold text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <Profile />;
};
