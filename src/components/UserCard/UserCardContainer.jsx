import UserCard from "./UserCard";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";

let mapStateToProps = (state) => ({
   isFetchingProfile: state.auth.isFetchingProfile,
   profileData: state.auth.profileData,
   isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {logout})(UserCard);