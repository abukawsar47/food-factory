import React from 'react';
import banner from '../../assets/images/vbc.jpg'

const Landing = () => {
    return (
        <div class="hero min-h-screen"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-white">
                <div class="max-w-xl" >
                    <h1
                        class="mb-6 text-6xl font-bold uppercase"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="2000"
                    >Get Started
                        With a Healthier You</h1>
                    <p
                        class="mb-6 text-xl font-semibold"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="1500"
                    >We make eating healthy convenient and delicious so you can have more time to do the things you love.</p>
                    <button
                        class="btn btn-primary hover:btn-secondary duration-1000 font-bold px-10"
                        data-aos="zoom-out"
                        data-aos-delay="900"
                    // data-aos-duration="1000"
                    >Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;