import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl lg:p-5">
                <div className='flex justify-center gap-2 mt-10'>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={
                                testimonial?.img
                                    ? testimonial?.img
                                    : "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                            } alt="user" />
                        </div>
                    </div>
                    <div className='text-left'>
                        <h2 className="card-title font-bold">{testimonial?.name}</h2>
                        <p>{testimonial?.profession}</p>
                        <p>
                            {/* {testimonial?.ratting} */}
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </p>
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <p className='text-xl font-bold lg:px-[15%]'>{testimonial?.comment}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;