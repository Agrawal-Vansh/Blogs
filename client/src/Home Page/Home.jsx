import React from "react";

function Home() {
  return (
    <div className="flex justify-center items-center bg-[#0B0D18] h-screen w-screen overflow-hidden">
        <div className="w-[88%] h-full bg-grid-pattern bg-[length:90px_90px] z-10">
          <div className="flex">
            <div className="max-w-[85%] max-h-40 p-12">
          <h1 className="text-6xl font-extralight text-white text-wrap mx-8 my-6">Innovate, Learn, Connect</h1>
          <p className="max-w-full text-xl text-white font-normal text-wrap mx-8">Explore the latest tech trends, gain insights from industry experts, and engage with fellow tech enthusiasts. From AI breakthroughs to coding tips, our blog is your go-to resource for all things.</p>
          <div>
          <button
          className="bg-blue-500 text-white">Sign Up</button>
          </div>
          </div>
          <img src="/Saly-11.png"
          className=" h-[477px] w-[477px] m-3" />
          </div>
        </div>
      {/* Your other content */}
    </div>
  );
}

export default Home;
