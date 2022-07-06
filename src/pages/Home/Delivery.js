import React from 'react';
import delivery from '../../assets/images/foods/food-delivery.gif'

const Delivery = () => {
    return (
        <div className='max-w-7xl mx-auto px-12'>
            <div className='lg:min-h-[95vh]'>
                <div className='text-center  lg:mt-28 lg:mb-20 my-5 block'>
                    <h2 className='text-primary lg:text-5xl text-2xl font-bold mb-2 uppercase'> food delivery</h2>
                    <div className="divider w-1/2 mx-auto">
                        <div className="rating ">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-secondary" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-secondary" />
                        </div>
                    </div>
                    <h4 className='text-xl'>We are committed to delivery food quickly</h4>
                </div>
                <div className="hero  bg-base-100">
                    <div className="hero-content text-center">
                        <div className="max-w-sm">
                            <img src={delivery} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;