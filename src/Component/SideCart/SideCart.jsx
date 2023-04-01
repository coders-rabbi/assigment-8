import React, { useEffect, useState } from 'react';
import './SideCart.css'

const SideCart = ({ watchTime }) => {
    const [time, setTime] = useState(watchTime);
    // const [title, setTitle] = useState([]);

    const testTitle = JSON.parse(localStorage.getItem('bookmark'))
    


    // useEffect( () =>{
    //     

    // },[storedBookmark])



    useEffect(() => {
        const getWatchedTime = localStorage.getItem('watchTime');
        setTime(getWatchedTime);
    }, [watchTime])
    return (
        <div>
            <div className='read-time'>
                <h4>Spent time on read : {time} min</h4>
            </div>
            <div className='blog-heading'>
                <h2>Bookmarked Blogs : 8</h2>
                {
                    testTitle && 
                    testTitle.map(singleTitle => <h4>{singleTitle.title}</h4>)
                }
            </div>
        </div>
    );
};

export default SideCart;