import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength100 = maxLength(100);

const NewPostForm = (props) => {
    return (
        <form name={'newPost'} onSubmit={props.handleSubmit}>
            <div>
                <Field name={'post'}
                       placeholder={'New post'}
                       validate={[required, maxLength100]}
                       component={Textarea}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const NewPostReduxForm = reduxForm({form: "newPost"})(NewPostForm);

const MyPosts = (props) => {
    let postsElements = props.posts.map(d => <Post message={d.message} key={d.id} likesCount={d.likesCount}/>);

    let onAddPost = (formData) => {
        props.addPost(formData.post);
        props.resetForm('newPost');
    };

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <NewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;