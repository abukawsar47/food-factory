import React from "react";
import banner from "../../assets/images/vbc.jpg";

const Landing = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-xl">
          <h1
            className="mb-6 lg:text-5xl text-3xl font-bold uppercase"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            Get Started With a Healthier You
          </h1>
          <p
            className="mb-6 text-xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            We make eating healthy convenient and delicious so you can have more
            time to do the things you love.
          </p>
          <button
            className="btn btn-primary hover:btn-secondary duration-1000 font-bold px-10"
            data-aos="zoom-out"
            data-aos-delay="900"
            // data-aos-duration="1000"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
