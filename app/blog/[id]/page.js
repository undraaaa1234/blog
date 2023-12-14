"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
export default function Contact() {
  function Profile() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
      fetch(`https://dev.to/api/articles/${id}`)
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
        <div className="flex flex-col p-10">
          <h1>{data.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: data.body_html }}
            className="flex flex-col gap-4 medeelel"
          ></div>
        </div>
      </>
    );
  }
  return <Profile />;
}
