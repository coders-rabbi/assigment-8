import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Home = ({handlWatchTime, handlBlogTitle}) => {
    const [blogs, setBlogs] = useState([])

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then( data => setBlogs(data))
    },[])


    return (
        <div>
            {
                blogs.map(blog => <SingleBlog
                    handlBlogTitle={handlBlogTitle}
                    handlWatchTime={handlWatchTime}
                    key={blog.id}
                    blog={blog}
                ></SingleBlog>)
            }
        </div>
    );
};

export default Home;