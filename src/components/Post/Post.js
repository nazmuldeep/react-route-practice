import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './post.css'

const Post = ({ post }) => {
    const { id, tittle, body } = post;
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate((`/post/${id}`));
    }
    return (
        <div className='post'>
            <p>{tittle}</p>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>visit</Link>
            <Link to={`/post/${id}`}><button>Show Details1</button>
            </Link>
            <button onClick={handleNavigate}>Show details2</button>

        </div>
    );
};

export default Post;