import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Home() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch('http://localhost:3000/') // api for the get request
  //   .then(response => response.json())
  //   .then(data => setData(data));
  // }, []);

  return (
    <div
      id="home"
      className=" h-svh  flex-col md:pt-48 bg-gray-200  pt-32 transition-all"
    >
      <div className="max-[600px]:hidden text-4xl md:text-4xl min-[900px]:text-5xl items-center place-content-center flex min-[600px]:p-8">
        Hey, I'm Atique ur Rahman
      </div>
      <div className="min-[600px]:hidden text-4xl items-center place-content-center flex">
        Hey, I'm{" "}
      </div>
      <div className="min-[600px]:hidden text-4xl items-center place-content-center flex">
        Atique ur Rahman
      </div>
      <div className="max-[600px]:hidden md:text-xl min-[900px]:text-2xl items-center place-content-center flex">
        A Result-Oriented Web Developer building and managing Websites and Web
      </div>
      <div className="max-[600px]:hidden md:text-xl min-[900px]:text-2xl items-center place-content-center flex">
        Applications that leads to the success of the overall product
      </div>
      <div className="min-[600px]:hidden m-8 text-xl">
        A Result-Oriented Web Developer building and managing Websites and Web
        Applications that leads to the success of the overall product
      </div>
      <div className=" items-center place-content-center flex font-medium text-xl">
        <div className="absolute  max-[640px]:hidden min-[640px]:left-0 p-2 bg-gray-300 rounded-md flex flex-col min-[640px]:space-y-4">
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/atique-ur-rahman-a25824226/",
                "_blank"
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0077B5"
                d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5z"
              />
              <path
                fill="#FFF"
                d="M6.94 19H4V9h2.94v10zM5.47 7.579a1.642 1.642 0 110-3.285 1.642 1.642 0 010 3.285zM20 19h-2.94v-5.647c0-1.348-.026-3.08-1.877-3.08-1.88 0-2.169 1.464-2.169 2.976V19H10v-10h2.819v1.367h.04c.393-.743 1.352-1.524 2.783-1.524 2.976 0 3.523 1.959 3.523 4.505V19z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1877F2"
                d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.032 4.388 11.028 10.125 11.924v-8.432H7.078V12.07h3.047V9.412c0-3.011 1.792-4.684 4.533-4.684 1.314 0 2.688.235 2.688.235v2.953H15.68c-1.484 0-1.945.921-1.945 1.864v2.292h3.31l-.53 3.493h-2.78v8.43C19.612 23.1 24 18.104 24 12.073z"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              window.open(
                "https://youtube.com/@atique_ur_rahman?si=EY5nmKrwVigKMoB4",
                "_blank"
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FF0000"
                d="M23.499 6.199a2.99 2.99 0 00-2.103-2.107C19.949 3.5 12 3.5 12 3.5s-7.949 0-9.396.592A2.991 2.991 0 00.501 6.199C0 7.651 0 12 0 12s0 4.349.501 5.801a2.99 2.99 0 002.103 2.107C4.051 20.5 12 20.5 12 20.5s7.949 0 9.396-.592a2.99 2.99 0 002.103-2.107C24 16.349 24 12 24 12s0-4.349-.501-5.801z"
              />
              <path fill="#FFF" d="M9.75 15.6V8.4l6.75 3.6-6.75 3.6z" />
            </svg>
          </button>
        </div>
        <Link
          to="projects"
          smooth={true}
          duration={1000}
          className="ml-8 mr-8 cursor-pointer"
        >
          <button className="bg-gray-400 pt-2 pb-2 m-8 pl-16 pr-16 rounded-md">
            Projects
          </button>
        </Link>
      </div>
      <div className="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <svg className="animate-bounce bg-white rounded hover:animate-spin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 5v14M19 12l-7 7-7-7"/>
</svg>

      </div>
    </div>
  );
}
