import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#0C0722]  p-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center  my-20">
        {/* Left Side: TradyLytics */}
        <h1 className="text-4xl md:text-6xl font-semibold text-zinc-50 leading-none tracking-tight mb-6 md:mb-0">
          TradyLytics
        </h1>

        {/* Right Side: Social Links */}
        <div className="flex gap-6">
          {[
            { name: "Instagram", link: "#instagram" },
            { name: "Twitter", link: "#twitter" },
            { name: "LinkedIn", link: "#linkedin" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="text-zinc-300 hover:text-zinc-100 text-lg"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
