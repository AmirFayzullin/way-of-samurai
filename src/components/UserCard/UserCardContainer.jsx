import UserCard from "./UserCard";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
   isFetchingProfile: state.auth.isFetchingProfile,
   profileData: state.auth.profileData,
   isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {})(UserCard);