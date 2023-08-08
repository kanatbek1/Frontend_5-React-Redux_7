import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUserInfo } from '../../store/postSlice';
const Post = ({ postInfo }) => {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState(false);
    const getInfo = () => {
        setUserInfo(prevUserInfo => !prevUserInfo);
        dispatch(postUserInfo(postInfo.id));
    };
    return (
        <div>
            <h1>{postInfo.title}</h1>
            <button onClick={getInfo}>подробнее</button>
            <p>===============</p>
            {userInfo && (
                <>
                    <p>{postInfo.id}</p>
                    <p>{postInfo.body}</p>
                </>
            )}
        </div>
    );
};
export default Post;

