import React from "react";
import ourServicesBackground from "../assets/ourServicesBackground.png";
import { useSpring, animated } from "react-spring";
import icon1 from '../assets/ICON-PROJECT 2.png';
import icon2 from '../assets/icon-2 1.png';
import icon3 from '../assets/icon-3 1.png';
import ContactUs from "./ContactUs";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 100,
    config: { mass: 1, tension: 100, friction: 10 },
  });
  return <animated.div className={'text-5xl text-dark_gray font-bold'}>{number.to((n) => n.toFixed(0))}</animated.div>;
}
const OurServices = () => {
  return (
    // set the background image and adjust it as needed
    <div
      className=" h-fit py-10"
      style={{
        background: `url(${ourServicesBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
        {/* the three icons with content */}
      <div className="flex justify-center items-center gap-20 font-titles w-4/6 mx-auto">

      <div className="grid gap-1 items-center justify-center text-center"> 
        <img src={icon1} className="mx-auto h-28 w-auto " />
        <Number n={2513}/>
        <p className="text-dark_gray">2K+ Projects Completed </p>
      </div>

      <div className="grid gap-1 items-center justify-center text-center"> 
        <img src={icon2} className="mx-auto h-28 w-auto" />
        <div className="flex gap-0 justify-center items-center text-center text-4xl font-bold text-dark_gray"><Number n={85}/> %</div>
        <p className="text-dark_gray">85% Clients satisfaction rate </p>
      </div>

      <div className="grid gap-1 items-center justify-center text-center"> 
        <img src={icon3} className="mx-auto h-28 w-auto" />
        <Number n={30456}/>
        <p className="text-dark_gray">30K Users Engaged </p>
      </div>

      </div>
      {/* the label  */}
      <div>
        <h3 className="capitalize font-extrabold text-7xl text-dark_gray text-center py-10 tracking-wide">Our Services</h3>
        <div className="bg-transparent rounded-full w-fit mx-auto px-4 py-2 backdrop-blur-sm shadow-md shadow-black"><p className="text-3xl font-titles"> Creative Solutions for Your Business.</p></div>
      </div>
      {/* the three divs of services content */}
      <div className="flex items-center justify-between gap-10 mx-32  py-10">
        <div className="rounded-lg py-6 bg-gray-50 h-3/6 w-1/3 border box-border">
        <p className="text-4xl text-center font-semibold pb-6 px-2">Graphic Design</p>
        <ul className="list-disc ml-14 text-gray-500 font-light capitalize">
            <li className="pb-2">Logo Design.</li>
            <li className="pb-2">Brochure Design.</li>
            <li className="pb-2">Poster Layout.</li>
            <li className="pb-2">Visual Branding.</li>
            <li className="pb-2">Digital Illustrations.</li>
        </ul>
        <div className="px-7 py-3">
        <button className="font-titles text-gray-50 py-2 w-full mx-auto bg-dark_gray rounded-md ">Discover More</button>
        </div>
        </div>
        <div className="rounded-lg py-6 bg-dark_gray text-gray-50 h-3/6 w-1/3 border  box-border">
        <p className="text-4xl text-center font-semibold pb-6 px-2">Motion Graphic</p>
        <ul className="list-disc ml-14 text-gray-50 capitalize font-light text-sm">
            <li className="">Logo Animation.</li>
            <li className="">Creation of Animated Inforgraphics.</li>
            <li className="">Dynamic vedio Editing.</li>
            <li className="">transition of visual elements.</li>
            <li className="pb-2">storyboarding for animated projects.</li>
            <li className="pb-2">special effect for videos.</li>
        </ul>
        <div className="px-7 py-3">
        <button className="font-titles bg-gray-50 py-2 w-full mx-auto text-dark_gray rounded-md font-semibold">Discover More</button>
        </div>
        </div>
        <div className="rounded-lg py-6 bg-gray-50 h-3/6 w-1/3 border ">
        <p className="text-4xl text-center font-semibold pb-6 px-2">3D Design</p>
        <ul className="list-disc ml-14 text-gray-500 font-light capitalize">
            <li className="pb-2">3D modeling of objects</li>
            <li className="pb-2">texture and materials.</li>
            <li className="pb-2">3D image rendering.</li>
            <li className="pb-2">3D model animation.</li>
            <li className="pb-2">3D environnement Design.</li>
        </ul>
        <div className="px-7 py-3">
        <button className="font-titles text-gray-50 py-2 w-full mx-auto bg-dark_gray rounded-md ">Discover More</button>
        </div>
        </div>
      </div>
      {/* the contactUs Component */}
      <ContactUs />

    </div>
  );
};

export default OurServices;
