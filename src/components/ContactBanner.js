import React from 'react';
import contactBg from '../assets/images/contact/contact.jpg'

const ContactBanner = () => {
    return (
        <div className="hero min-h-[80vh]"
            style={{ backgroundImage: `url(${contactBg})` }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-xl" >
                    <h1
                        className="mb-6 lg:text-5xl text-3xl font-bold uppercase"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="2000"
                    >Contact US</h1>
                    <p
                        className="mb-6 text-xl font-semibold"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="1500"
                    >We make eating healthy convenient and delicious so you can have more time to do the things you love.</p>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;