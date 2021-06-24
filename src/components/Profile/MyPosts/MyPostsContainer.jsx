import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {getPosts} from "../../../redux/profileSelectors";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profileReducer";
import {resetForm} from "../../../redux/dialogsReducer";

const maxLength100 = maxLength(100);

const NewPostForm = ({handleSubmit}) => {
    return (
        <form name={'newPost'} onSubmit={handleSubmit}>
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

const MyPostsContainer = ({posts, addPost, resetForm}) => {
    let postsElements = posts.map(d => <Post message={d.message} key={d.id} likesCount={d.likesCount}/>);

    let onAddPost = (formData) => {
        addPost(formData.post);
        resetForm('newPost');
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

let mapStateToProps = (state) => ({
    posts: getPosts(state),
});

export default connect(mapStateToProps, {addPost, resetForm})(MyPostsContainer);;
