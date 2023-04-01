import React from 'react';
import authorLogo from '../../image/author.png'
import './SingleBlog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';

const SingleBlog = ({ blog, handlWatchTime }) => {
    const { author, blogTitle, hashTag, img, publish, readingTime } = blog;

    const blogHeading = () =>{
        toast("Wow so easy!");
    }
    return (
        <div className='blog-container'>
            <img className='blog-img' src={img} alt="" />
            <div className='author-info'>
                <div className='author-details'>
                    <img src={authorLogo} alt="" />
                    <div>
                        <h6>{author}</h6>
                        <p><small>{publish}</small></p>
                    </div>
                </div>
                <button onClick={() => handlWatchTime(readingTime)}>
                    {readingTime} minutes
                    <FontAwesomeIcon icon={faCoffee} />
                </button>
            </div>
            <h2>How to get your first job as a self taugh programer</h2>
            <p><small>{hashTag}</small></p>
            <button onClick={blogHeading}>Mark as read</button>
        </div>
    );
};

export default SingleBlog;