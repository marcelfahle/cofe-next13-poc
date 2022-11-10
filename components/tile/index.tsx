"use client";

import Image from "../image";
import Link from "next/link";

const Tile = ({ data }: any) => {
  const {
    image,
    title,
    titleColor = "text-black",
    titleFont = "font-sans",
    subtitle,
    subtitleColor = "text-black",
    subtitleFont = "font-sans",
    ctaLabel,
    ctaReference,
  } = data;
  console.log("TILE IS HERE", data);

  return (
    <div className="relative flex justify-center overflow-hidden p-2 align-middle">
      {image && (
        <div className="w-full">
          <Image
            media={image}
            className="opacity-70 md:opacity-100"
            alt={title}
          />
        </div>
      )}

      <div className="absolute top-1/2 flex max-w-md -translate-y-1/2 flex-col justify-center text-center md:left-10 md:max-w-xl md:text-left">
        <div
          className={`text-md mb-2 md:font-medium ${subtitleFont} ${subtitleColor}`}
        >
          <p>{subtitle}</p>
        </div>
        <h2
          className={`w-full whitespace-pre-line px-10 text-center text-5xl font-extrabold ${titleFont} tracking-tight ${titleColor} sm:px-0 md:w-60 md:text-left md:text-4xl lg:text-5xl`}
        >
          <p>{title}</p>
        </h2>

        {ctaLabel && ctaReference && (
          <div className="flex w-full justify-center md:justify-start">
            <Link
              href="#"
              className=" mt-8 w-72 rounded-md border border-transparent bg-accent-400 py-2 px-4 text-center text-base font-semibold text-white hover:bg-accent-500 md:w-fit"
            >
              <p>{ctaLabel}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tile;
