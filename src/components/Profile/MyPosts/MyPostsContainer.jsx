import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {resetForm} from "../../../redux/dialogsReducer";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPost, resetForm})(MyPosts);

export default MyPostsContainer;