import React from "react";
import "./App.css";
import { IoIosReturnRight } from "react-icons/io";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { RiCommunityLine } from "react-icons/ri";
import { TbPresentationAnalytics } from "react-icons/tb";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="bg-[#0C0722]  h-screen w-full pt-6 px-8  md:px-16 lg:px-32">
        <div className="h-16 flex justify-between items-center p-2">
          <h1 className="text-zinc-50 text-xl font-semibold">Tradylytics</h1>
          <button className="bg-zinc-50 text-sm font-medium flex justify-center gap-1 items-center h-12 px-4 w-32 md:w-40 rounded-2xl">
            Coming Soon
            <IoIosReturnRight className="mt-1" />
          </button>
        </div>

        <div className="h-3/5 my-6   py-8 px-4 sm:pt-32 md:py-16 md:px-16 lg:px-40 leading-loose">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-zinc-50 text-center">
            The Only Tool You Need <br />
            <span className="text-2xl sm:text-3xl md:text-4xl">
              To Become
            </span>{" "}
            <br />
            <div className="relative">
              <span className="text-[#39D783] z-20 absolute left-1/2 -translate-x-1/2 text-[12vw] sm:text-[17vw] md:text-[16vw] lg:text-[12vw] font-bold">
                Profitable
              </span>
            </div>
          </h1>
        </div>
      </div>

      <div className="h-full w-full bg-[#0C0722]">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center p-6">
          <div className="bg-zinc-50 h-80 md:h-96 w-72 md:w-96 rounded-2xl shadow-lg shadow-slate-500 p-6">
            <BsJournalBookmarkFill className="text-3xl md:text-4xl" />
            <h5 className="font-medium text-xl md:text-2xl py-3">Journal</h5>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet vel
              explicabo voluptate nesciunt, saepe dicta asperiores eveniet
              necessitatibus ipsa commodi quia ad perspiciatis quod ullam fugiat
              tempora. Aut deleniti quod nulla totam ipsa! Accusantium, hic.
            </p>
          </div>

          <div className="bg-zinc-50 h-80 md:h-96 w-72 md:w-96 rounded-2xl shadow-lg shadow-slate-500 p-6">
            <RiCommunityLine className="text-4xl md:text-5xl" />
            <h5 className="font-medium text-xl md:text-2xl py-3">Community</h5>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet vel
              explicabo voluptate nesciunt, saepe dicta asperiores eveniet
              necessitatibus ipsa commodi quia ad perspiciatis quod ullam fugiat
              tempora. Aut deleniti quod nulla totam ipsa! Accusantium, hic.
            </p>
          </div>

          <div className="bg-zinc-50 h-80 md:h-96 w-72 md:w-96 rounded-2xl shadow-lg shadow-slate-500 p-6">
            <TbPresentationAnalytics className="text-4xl md:text-5xl" />
            <h5 className="font-medium text-xl md:text-2xl py-3">Analytics</h5>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet vel
              explicabo voluptate nesciunt, saepe dicta asperiores eveniet
              necessitatibus ipsa commodi quia ad perspiciatis quod ullam fugiat
              tempora. Aut deleniti quod nulla totam ipsa! Accusantium, hic.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
