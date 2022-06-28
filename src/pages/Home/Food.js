import React from 'react';

const Food = ({ food }) => {

    return (

        <>
            <div class="card  bg-base-100 shadow-xl">
                <figure class="px-5 pt-5">
                    <div className='overflow-hidden'>
                        <img src={food?.img} alt="food" class="rounded-xl duration-1000 hover:scale-[1.3]" />
                    </div>
                </figure>
                <div class="card-body items-center text-center p-5">
                    <h2 class="card-title font-bold">{food.name}</h2>
                    <p><strong className=''>Price: ${food?.price}</strong></p>
                    <p><strong className=''>Available Quantity: {food?.available}</strong></p>
                    <div class="card-actions">
                        <button class="btn btn-sm btn-primary hover:btn-secondary duration-1000 font-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Food;