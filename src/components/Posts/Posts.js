import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h3>Here lots of post are here{posts?.length}</h3>

            {
                posts.map(post => <Post
                    key={Post.id}
                    post={post}
                ></Post>)
            }

        </div>
    );
};

export default Posts;