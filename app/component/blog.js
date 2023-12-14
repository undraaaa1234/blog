"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
export const Blog = () => {
  function Profile() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [more, SetMore] = useState(6);
    const [filter, setFilter] = useState("");

    useEffect(() => {
      fetch(`https://dev.to/api/articles?per_page=${more}${filter}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, [more, data]);

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No profile data</p>;
    console.log(data);

    return (
      <>
        <div className="py-8 flex flex-col gap-6 text-slate-800">
          <div className="flex flex-col gap-4">
            <button className="font-bold text-xl">All blog post</button>
            <div className="flex gap-4 justify-between">
              <div className="flex gap-4">
                <button
                  onClick={() => setFilter("")}
                  className="hover:text-yellow-500"
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("&tag=design")}
                  className="hover:text-yellow-500"
                >
                  Design
                </button>
                <button
                  onClick={() => setFilter("&tag=travel")}
                  className="hover:text-yellow-500"
                >
                  Travel
                </button>
                <button
                  onClick={() => setFilter("&tag=fashion")}
                  className="hover:text-yellow-500"
                >
                  Fashion
                </button>
                <button
                  onClick={() => setFilter("&tag=technology")}
                  className="hover:text-yellow-500"
                >
                  Technology
                </button>
                <button
                  onClick={() => setFilter("&tag=branding")}
                  className="hover:text-yellow-500"
                >
                  Branding
                </button>
              </div>

              <div>
                <Link href="/blog" className="hover:text-yellow-500">
                  <h1>View all</h1>
                </Link>
              </div>
            </div>

            {/* <Link href="/blog" className="hover:text-yellow-500">
              <h1>View all</h1>
            </Link> */}
          </div>

          <div className="grid grid-cols-3 gap-6 ">
            {data.map((item, index) => (
              <Link href={`/blog/${item.id}`}>
                <div
                  key={index}
                  className="border border-gray-200 w-fit rounded-xl p-4"
                >
                  <img src={item.social_image} className="h-[300px]"></img>
                  <div className="p-4 flex flex-col gap-4">
                    <h1 className="bg-blue-500 text-white w-fit py-1 px-3 rounded-xl">
                      {item.title}
                    </h1>
                    <p className="font-bold w-[250px]">{item.description}</p>
                    <p className="text-gray-300">
                      {item.readable_publish_date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <button
              onClick={() => SetMore((prev) => prev + 3)}
              className="text-gray-400 border border-gray-300 w-fit p-3 rounded-md"
            >
              Load more
            </button>
          </div>
        </div>
      </>
    );
  }
  return <Profile />;
};
