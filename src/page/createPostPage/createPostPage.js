import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../store/postSlice';
const CreatePostPage = () => {
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.post);
    const [form, setForm] = useState({});
    const changeForm = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };
    const submit = (e) => {
        e.preventDefault();
        dispatch(createPost({ title: form.title, body: form.body }));
    };
    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name="title" onChange={changeForm} />
                <textarea name="body" cols="30" rows="10" onChange={changeForm}></textarea>
                <button type="submit">Создать пост</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};
export default CreatePostPage;

