import React from "react";
import about from "../assets/images/about/about.jpg";
// import cooking from "../assets/media/login.mp4";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <div className="min-h-[95vh]">
        <div className="text-center  lg:mt-28 lg:mb-20 my-5 block">
          <h2 className="text-primary lg:text-5xl text-2xl font-bold mb-2 uppercase">
            We are the best
          </h2>
          <div className="divider w-1/2 mx-auto">
            <div className="rating ">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-secondary"
              />
            </div>
          </div>
          <h4 className="text-xl">We always try to provide the best food!</h4>
        </div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row justify-evenly  w-full gap-10">
            <div className="shrink-0 ">
              <img src={about} className="w-full card shadow-xl" alt="berger" />

              {/*    <video
                className="card  shadow-xl"
                src={cooking}
                autoPlay
                muted
                loop
              ></video> */}
            </div>
            <div className="lg:w-1/2 text-center lg:text-start">
              <h1 className="lg:text-5xl text-2xl font-bold uppercase">
                Why We are the best!
              </h1>
              <p className="py-6 max-w-xl">
                Amet, pretium elementum ut praesent porttitor natoque non odio.
                Vel ut integer feugiat ut velit phasellus cras. Volutpat
                vulputate mattis venenatis tellus felis urna, pulvinar. lectus
                volutpat dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
