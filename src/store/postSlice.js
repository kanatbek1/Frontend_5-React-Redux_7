import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getPosts = createAsyncThunk(
    'post/getPosts',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const createPost = createAsyncThunk(
    'post/createPost',
    async function (postData, { rejectWithValue }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const postUserInfo = createAsyncThunk(
    'post/getUserInfo',
    async function (postId, { rejectWithValue }) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${postId}`);
            const userInfo = await response.json();
            return userInfo;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        preloader: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.preloader = true;
                state.error = null;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.preloader = false;
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.preloader = false;
                state.error = action.payload;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            .addCase(postUserInfo.fulfilled, (state, action) => {
                state.userInfo = action.payload;
            })
            .addCase(createPost.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(postUserInfo.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});
export default postSlice.reducer;

