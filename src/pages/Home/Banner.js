import React from 'react';
// import berger from '../../assets/images/berger/ba12.webp'
import cooking from '../../assets/media/video.mp4'

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto px-12'>
            <div className='min-h-[95vh]'>
                <div className='text-center  lg:mt-28 lg:mb-20 my-5 block'>
                    <h2 className='text-primary lg:text-5xl text-2xl font-bold mb-2 uppercase'>Welcome To Our Food Factory</h2>
                    <div class="divider w-1/2 mx-auto">
                        <div class="rating ">
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
                        </div>
                    </div>
                    <h4 className='text-xl'>We always try to provide the best food!</h4>
                </div>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row justify-evenly  w-full gap-10">
                        <div className='shrink-0 lg:w-1/2'>
                            {/* <img src={berger} class="w-full  " alt='berger' /> */}

                            <video
                                className='card  shadow-xl'
                                src={cooking} autoPlay muted loop>
                            </video>
                        </div>
                        <div className='lg:w-1/2 text-center lg:text-start'>
                            <h1 class="lg:text-5xl text-2xl font-bold uppercase">We Provide best FOODS in town!</h1>
                            <p class="py-6 max-w-xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                            <button class="btn btn-primary hover:btn-secondary duration-1000 font-bold px-10">Order Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;