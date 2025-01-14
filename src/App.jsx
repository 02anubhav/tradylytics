import React from "react";
import "./App.css";
import { IoIosReturnRight } from "react-icons/io";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { RiCommunityLine } from "react-icons/ri";
import { TbPresentationAnalytics } from "react-icons/tb";
import { TbSettingsAutomation } from "react-icons/tb";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="bg-[#0C0722]   h-screen w-full pt-6 px-8  md:px-16 lg:px-32">
        <div className="h-16 flex justify-between items-center p-2">
          <h1 className="text-zinc-50 text-xl md:text-4xl  lg:text-5xl font-semibold">
            TradyLytics
          </h1>
          <button className="bg-zinc-50 text-sm  md:text-lg lg:text-lg font-medium flex justify-center gap-1 items-center h-12 px-4 w-32 md:w-40 rounded-2xl ">
            Coming Soon
          </button>
        </div>

        <div className="h-3/5 my-10   px-4 sm:pt-32 md:py-16 md:px-16 lg:px-40 leading-loose">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-zinc-50 text-center">
            Turning Every Trade <br />
            <div className="relative">
              <span className="text-[#39D783] z-20 absolute left-1/2 -translate-x-1/2 text-[16vw] sm:text-[17vw] md:text-[16vw] lg:text-[12vw] font-bold">
                Profitable
              </span>
            </div>
          </h1>
        </div>
        <div className="relative  -mt-32  h-1/4 flex items-center justify-center lg:-py-16 xl:-py-24">
          <h1 className="absolute text-[18vw] -mt-12  sm:text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold opacity-40 text-stroke text-[#0C0722]">
            Coming Soon
          </h1>

          <h1 className="relative text-[12vw] sm:text-[10.5vw]   md:text-[9.5vw] lg:text-[8.5vw] opacity-90 font-bold text-stroke text-[#0C0722]">
            Coming Soon
          </h1>
        </div>
      </div>

      <div className="h-full w-full bg-[#0C0722] md:mt-0 lg:mt-0  -mt-36 ">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center p-6  pt-32">
          <div className="group relative bg-zinc-50 h-80 md:h-96 w-72 md:w-96 rounded-2xl shadow-md shadow-slate-500 p-6 overflow-hidden">
            {/* Initial State - Centered "Analyze" */}
            <div className="absolute inset-0 flex items-center justify-center text-black text-3xl font-bold transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-90">
              Analyze
            </div>

            {/* Hover State - Card Content */}
            <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
              <TbSettingsAutomation className="text-5xl md:text-5xl" />
              <h5 className="font-medium text-xl md:text-2xl py-3 text-black">
                Automation
              </h5>
              <p className="text-md md:text-base text-black">
                Say goodbye to manual journaling. Our platform automatically
                logs your trades, ensuring accuracy and saving time so you can
                focus on trading.
              </p>
            </div>
          </div>

          <div className="group relative bg-zinc-50 h-80 md:h-96 w-72 md:w-96 rounded-2xl shadow-md shadow-slate-500 p-6 overflow-hidden">
            {/* Initial State - Centered "Analyze" */}
            <div className="absolute inset-0 flex items-center justify-center text-black text-3xl font-bold transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-90">
              Trade
            </div>

            {/* Hover State - Card Content */}
            <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
              <RiCommunityLine className="text-4xl md:text-5xl" />
              <h5 className="font-medium text-xl md:text-2xl py-3 text-black">
                Community
              </h5>
              <p className="text-md md:text-base text-black">
                Connect with like-minded traders in a thriving community. Share
                insights, learn from each other, and grow together as you
                navigate the financial markets.
              </p>
            </div>
          </div>

          <div className="group relative bg-zinc-50 h-80 md:h-96 w-72 md:w-96 rounded-2xl shadow-md shadow-slate-500 p-6 overflow-hidden">
            {/* Initial State - Centered "Analyze" */}
            <div className="absolute inset-0 flex items-center justify-center text-black text-3xl font-bold transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-90">
              Elevate
            </div>

            {/* Hover State - Card Content */}
            <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
              <TbPresentationAnalytics className="text-4xl md:text-5xl" />
              <h5 className="font-medium text-xl md:text-2xl py-3 text-black">
                Analytics
              </h5>
              <p className="text-md md:text-base text-black">
                Gain deep insights into your trading performance with advanced
                metrics and visualizations. Make data-driven decisions to
                enhance your profitability.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
