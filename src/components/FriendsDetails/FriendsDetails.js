import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <p>Deatils About: {friend.name} </p>
            <p>Him/Her Phone Number:{friend.phone}</p>
            <h2>Everything you mneed to know this person</h2>
        </div>
    );
};

export default FriendsDetails;