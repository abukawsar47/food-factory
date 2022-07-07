import React, { useState } from 'react';
import FoodDetails from './modal/FoodDetails';

const Food = ({ food }) => {
    const [foodDetails, setFoodDetails] = useState(null);


    return (

        <>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <div className='overflow-hidden'>
                        <img src={food?.img} alt="food" className="rounded-xl duration-1000 hover:scale-[1.3] " />
                    </div>
                </figure>
                <div className="card-body items-center text-center p-5">
                    <h2 className="card-title font-bold">{food.name}</h2>
                    <p><strong className=''>Price: ${food?.price}</strong></p>
                    <p><strong className=''>Available Quantity: {food?.available}</strong></p>
                    <div className="card-actions">
                        <label
                            onClick={() => { setFoodDetails(food) }}
                            for="my-modal-3"
                            className="btn btn-sm btn-primary hover:btn-secondary duration-1000 font-bold"
                        >Buy Now</label>
                    </div>
                </div>
                {foodDetails && <FoodDetails
                    foodDetails={foodDetails}
                    setFoodDetails={setFoodDetails}
                />}
            </div>
        </>
    );
};

export default Food;