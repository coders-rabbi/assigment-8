import React, { useEffect, useState } from 'react';

const SideCart = ({watchTime}) => {
    const [time, setTime] = useState(watchTime);

    useEffect( () =>{
        const getWatchedTime = localStorage.getItem('watchTime');
        setTime(getWatchedTime);
    },[watchTime])
    return (
        <div>
            <h4>Total Reading Time : {time}</h4>
        </div>
    );
};

export default SideCart;