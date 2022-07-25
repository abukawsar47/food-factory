// import { async } from '@firebase/util';
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fetcher from '../api';

const AllFoods = () => {

    const [allFoods, setAllFoods] = useState();

    useEffect(() => {
        // axios.get("http://localhost:5000/foods").then((res) => console.log(res.data));
        (async () => {
            const res = await fetcher.get("/foods");
            setAllFoods(res.data)
            console.log(res.data)
        })()
    }, [])

    return (
        <div>
            <h1>All Food</h1>
        </div>
    );
};

export default AllFoods;