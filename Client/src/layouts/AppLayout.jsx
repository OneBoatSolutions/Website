import React from "react";
import Navbar from "../components/Navbar";
import ScrollBaseAnimation from "../components/ScrollBaseAnimation";
import "../css/AppLayout.css";
import Footer from "../components/Footer";
import AboutUs from "../ui/AboutUs";
import Services from "../ui/Services";
import VissionAndVison from "../ui/VissionAndVison";


const AppLayout = () => {
  return (
    <div className="App">
      <div className="grid-background"></div>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-between p-4 relative z-[-1]">
        {/* Content container */}
        <div className="p-5 m-2 w-[90%] h-auto flex flex-col justify-center items-center content-container relative">
          {/* One Boat Solutions heading */}
          <div className="One_Boat_Heading flex flex-row sm:flex-row gap-3 m-0 p-0 text-center lg:text-left">
            <div className="font-semibold text-6xl sm:text-8xl text-blue-700">
              One
            </div>
            <div className="font-semibold text-6xl sm:text-8xl">Boat</div>
            <div className="font-semibold text-6xl lg:block sm:text-8xl hidden">
              Solutions{" "}
            </div>
          </div>

          {/* Solutions placed on the next line in mobile view */}
          <div className="font-semibold text-6xl sm:hidden sm:text-8xl  mt-4 sm:mt-0 text-center lg:text-left">
            Solutions
          </div>

          {/* Tagline */}
          <div className="TagLine text-2xl sm:text-3xl mt-8 text-center ">
            Either You Sail with us Or Drown Without us...
          </div>

          {/* Description */}
          <div className="TagLine text-xl sm:text-2xl mt-4 text-center">
            "OneBoat Solutions is an innovative startup driving growth in
            EdTech, product development, and consultancy services, offering
            advanced, tech-driven solutions."
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-row gap-5 justify-center sm:flex-row lg:flex-row">
            <button className="btn btn-primary text-lg">Get Started</button>
            <button className="btn  btn-outline text-lg">Login</button>
          </div>
        </div>

        {/* Animated Blobs */}
        {/* Blue Blob - Centered */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/3 lg:w-[250px] lg:h-[250px] blob bg-pink-300 animate-blob sm:w-[50px] sm:h-[50px] sm:left[40px]"></div> */}

        {/* Yellow Blob - Top Right */}
        {/* <div className="absolute top-[75px] right-[100px] w-28 h-28 blob bg-yellow-300 animate-blob"></div> */}

        {/* Pink Blob - Bottom Left */}
        {/* <div className="absolute bottom-[50px] left-[170px] w-36 h-36 blob bg-blue-300 animate-blob "></div> */}
        {/* <div className="absolute bottom-[250px] left-[270px] w-16 h-16 blob bg-green-300 animate-blob"></div> */}
      </div>

      <section className="Text-Marquee">
        <div className="h-[150px] grid place-content-center">
          <ScrollBaseAnimation
            delay={5000}
            baseVelocity={-1}
            clasname="font-bold tracking-[-0.07em] leading-[90%]"
          >
            Either Sail with us
          </ScrollBaseAnimation>
          <ScrollBaseAnimation
            delay={5000}
            baseVelocity={1}
            clasname="font-bold tracking-[-0.07em] leading-[90%]"
          >
            Or Drown Without us
          </ScrollBaseAnimation>
        </div>
      </section>
      <div>

      <VissionAndVison/>
      <AboutUs/>
      <Services/>
      <Footer />

      </div>

    </div>
  );
};

export default AppLayout;
