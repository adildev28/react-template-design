import React from "react";
import background from "../assets/backgroundHero.png";
import hero_effect from "../assets/hero_effect.png";
import logo from "../assets/logo.png";
import arrow from "../assets/arrow.png";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat "
      id="acceuil"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* First Image */}
      {/* <div className="absolute inset-0"> */}
      {/* <img
          src={background}
          className="w-full h-full object-cover "
          alt="First Background"
        /> */}
      {/* </div> */}

      {/* Second Image (Absolute on top of the first one) */}
      <div className="absolute inset-0">
        <img
          src={hero_effect}
          className="w-full h-full object-cover opacity-75"
          alt="Second Background"
        />
      </div>
      <div className="absolute inset-0 ">
        <div className="h-2/6  bg-gradient-to-b from-custom_black to-transparent opacity-60"></div>
      </div>

      {/* Header with Logo and Menu */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-20 py-10 bg-transparent font-semibold">
        {/* Logo */}
        <a href="/" className="text-white text-2xl font-bold">
          <img
            src={logo}
            alt="logo"
            style={{
              filter: "drop-shadow(10px 10px 15px rgba(255, 255, 255))",
            }}
          />
        </a>

        {/* Menu */}
        <nav className="flex space-x-20 text-custom_white underline underline-offset-4">
          <a href="#" className="hover:text-dark_gray hover:font-extrabold">
            Home
          </a>
          <a href="#" className="hover:text-dark_gray hover:font-extrabold">
            About
          </a>
          <a href="#" className="hover:text-dark_gray hover:font-extrabold">
            Services
          </a>
          <a href="#" className="hover:text-dark_gray hover:font-extrabold">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section Content */}
      <section className="font-titles absolute top-20 right-2 text-center">
        <h1 className="text-custom_white text-3xl font-semibold ">
          Empowering{" "}
          <span className=" underline text-smooth_green text-5xl ">Brands</span>{" "}
        </h1>
        <h1 className="text-custom_white text-3xl font-semibold">
          Through Creative{" "}
          <span className=" underline text-smooth_green">Solutions.</span>{" "}
        </h1>
      </section>
      {/* arrow  */}
      <div className=" absolute top-96 left-48">
      <img src={arrow} className="w-64 h-64" />
      </div>
      {/* buttons */}
      <div className="absolute bottom-5 right-0 left-0 mx-auto flex justify-center items-center gap-16">
        <button className="border-0 rounded-md  bg-smooth_green text-dark_gray flex items-center justify-center">
          <p className="p-3 font-bold">L'ets work together </p>
          <span className=" p-3 bg-dark_gray text-smooth_green rounded-r-md">
            <FontAwesomeIcon icon={faPlay} />
          </span>
        </button>
        <button className="rounded-md bg-dark_gray text-custom_white p-3 px-10">
          View Projects
        </button>
      </div>

      {/* glasses centred div  */}
      <section className=" absolute bottom-24 right-0 left-0 mx-32 h-56 font-titles text-center text-custom_black backdrop-blur-sm  bg-custom_white/30 p-5 shadow-lg rounded-3xl">
            <p className="text-4xl font-titles ">
              We deliver cutting-edge web development, design, and marketing
              services that empower brands to create stunning and impactful
              digital experiences. With over 10 years of experience, our team is
              dedicated to innovation and collaboration.
            </p>
      </section>


    </div>
  );
};

export default Header;
