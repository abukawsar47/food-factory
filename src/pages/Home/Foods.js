import React, { useEffect, useState } from 'react';
import Food from './Food';

const Foods = () => {
    const [foods, setFoods] = useState([]);


    useEffect(() => {
        fetch('/foodsData.json')
            .then(res => res.json())
            .then(data => {
                const reversedData = data.reverse();
                setFoods(reversedData)
                console.log(reversedData)
            });

    }, []);

    return (
        <dir className="max-w-7xl mx-auto px-12">
            <div className='text-center lg:mb-12 mb-5'>
                <h2 className='text-primary lg:text-5xl text-2xl font-bold mb-2 uppercase'>Our Best foods</h2>
                <div class="divider w-1/2 mx-auto">
                    <div class="rating ">
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
                    </div>
                </div>
                <h4 className='text-xl'>We always try to provide the best food!</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    foods?.slice(0, 6).map((food) => <Food
                        key={food?._id}
                        food={food}
                    >
                    </Food>)
                }
            </div>
            <div className='lg:mt-12 mt-5 text-center'>
                <button class="btn btn-primary hover:btn-secondary duration-1000 font-bold px-10">View All Items</button>
            </div>
        </dir>
    );
};

export default Foods;