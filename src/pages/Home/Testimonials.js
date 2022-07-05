import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("/testimonials.json")
            .then(res => res.json())
            .then(data => {
                const reversedData = data.reverse();
                setTestimonials(reversedData)
                console.log(data);
            })
    }, [])

    return (
        <div className='max-w-7xl mx-auto px-12'>
            <div className='lg:min-h-[90vh]'>
                <div className='text-center  lg:mt-28 lg:mb-20 my-5 block'>
                    <h2 className='text-primary lg:text-5xl text-2xl font-bold mb-2 uppercase'>Happy Customers</h2>
                    <div className="divider w-1/2 mx-auto">
                        <div className="rating ">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-secondary" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-secondary" />
                        </div>
                    </div>
                    <h4 className='text-xl'>We are always happy to hear your honest opinion about us!</h4>
                </div>
                <div className="hero  bg-base-100">
                    <div className="hero-content text-center">
                        <div className="grid grid-col-1">
                            {
                                testimonials?.slice(0, 1).map(testimonial => <Testimonial
                                    key={testimonial?._id}
                                    testimonial={testimonial}
                                />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;