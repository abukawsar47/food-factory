import React from 'react';

const FoodDetails = ({ foodDetails, setFoodDetails }) => {
    const { name, price, description, available, img } = foodDetails;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative max-w-4xl">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex items-center'>
                        <img className='w-96 h-96' src={img} alt="food" />
                        <div className='ml-5'>
                            <h3 class="text-4xl font-bold my-2">{name}</h3>
                            <p class="py-2 text-xl font-bold">Price: <span className='text-primary'>${price}</span></p>
                            <p class="py-2 text-xl font-bold">Available: <span className='text-primary'>${available}</span></p>
                            <p class="py-2">{description}</p>
                            <div class="form-control w-full max-w-md my-2">
                                <label class="label">
                                    <strong class="label-text text-xl font-bold my-2">Order Quantity</strong>
                                </label>

                                <div className='flex gap-5'>
                                    <div>
                                        <input
                                            type="number"
                                            name="quantity"
                                            min="1"
                                            max={available}
                                            placeholder="Type here"
                                            class="input input-bordered input-primary w-full max-w-xs"
                                        />
                                    </div>
                                    <button className='btn btn-primary hover:btn-secondary duration-1000 font-bold'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FoodDetails;