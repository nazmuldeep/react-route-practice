import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    // console.log(post)
    const { id, title, body, userId } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h3>Details About Post:{id}</h3>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;