import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {resetForm} from "../../../redux/dialogsReducer";
import {getPosts} from "../../../redux/profileSelectors";

let mapStateToProps = (state) => ({
    posts: getPosts(state),
});

const MyPostsContainer = connect(mapStateToProps, {addPost, resetForm})(MyPosts);

export default MyPostsContainer;