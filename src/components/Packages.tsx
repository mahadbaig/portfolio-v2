import Image from "next/image";
import React from "react";
import img1 from "../../public/nextjs-original logo.png"
import img2 from "../../public/Figma logo.png"
import img3 from "../../public/🦆 icon _heart_.png"

const Packages = (props: any) => {
  return (
    <div
      className="
    flex
    flex-col
    justify-between
    items-start
    p-5
    gap-4
    h-72
    bg-lime-100
    rounded-2xl
    lg:w-2/6
    md:w-2/6
    w-full
    "
    >
      <div
        className="
        flex
        flex-row
        items-start
        gap-4
        "
      >
        <Image src={img1} alt="NextJS"  className={props.visibility1} />
        <Image src={img2} alt="Figma"  className={props.visibility2} />
        <Image src={img3} alt="Branding" width={35} className={props.visibility3} />
      </div>

      <div>
        <h1 className="lg:text-3xl md:text-2xl text-xl font-medium">{props.title}</h1>
        <p className="lg:text-xl md:text-base text-sm">{props.desc}</p>
      </div>

      <p>Starting at {props.price}</p>
    </div>
  );
};

export default Packages;
