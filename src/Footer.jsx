import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#0C0722]">
      <div className="max-w-screen-xl  mx-auto py-10 px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-32 text-zinc-50 mt-44">
        <div className="lg:basis-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-[8rem] font-semibold leading-none tracking-tight">
            TradyLytics
          </h1>
        </div>
        <div className="lg:basis-1/2 flex flex-col sm:flex-row gap-8">
          <div className="basis-1/3">
            <h4 className="mb-6 text-zinc-500 text-sm md:text-base">Socials</h4>
            {["Instagram", "Twitter", "LinkedIn"].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="block mt-2 text-zinc-600 text-sm md:text-base hover:text-zinc-300"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-6 text-zinc-500 text-sm md:text-base">
              Contact Us
            </h4>
            <a
              href="mailto:info@tradylytics.in"
              className="block mt-2 text-zinc-600 text-sm md:text-base hover:text-zinc-300"
            >
              info@tradylytics.in
            </a>
            <a
              href="tel:+91 9876543210"
              className="block mt-2 text-zinc-600 text-sm md:text-base hover:text-zinc-300"
            >
              +91 9166452134
            </a>
          </div>

          <div className="basis-1/2 flex flex-col items-start lg:items-end rounded-md">
            <h4 className="mb-4 text-zinc-50 text-lg font-semibold">
              TradyLytics
            </h4>
            <p className="pb-2 text-left lg:text-right text-sm md:text-base">
              318 Sector 5 Avas Vikas Colony, Sikandra, Agra,
              <br /> Uttar Pradesh, 282007 <br />
              India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
