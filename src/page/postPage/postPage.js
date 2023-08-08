import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/postSlice';
import Post from '../../components/post/post';
import PostSpinner from '../../components/post/postSpinner';
const PostPage = () => {
    const dispatch = useDispatch();
    const { posts, preloader, error } = useSelector((state) => state.post);
    const getPostsAsync = () => {
        dispatch(getPosts());
    };
    useEffect(() => {
        getPostsAsync();
    }, []);
    if (preloader) {
        return <PostSpinner />;
    }
    if (error) {
        return <h3>{error}</h3>;
    }
    return (
        <div>
            <div>
                <button onClick={getPostsAsync}>Получить посты</button>
            </div>
            {Array.isArray(posts) ? (
                posts.map((post) => <Post key={post.id} postInfo={post} />)
            ) : null}
        </div>
    );
};
export default PostPage;

