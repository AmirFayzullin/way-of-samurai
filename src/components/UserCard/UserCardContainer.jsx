import UserCard from "./UserCard";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {getIsAuth, getIsFetchingAuthProfile, getProfileData} from "../../redux/authSelectors";

let mapStateToProps = (state) => ({
   isFetchingProfile: getIsFetchingAuthProfile(state),
   profileData: getProfileData(state),
   isAuth: getIsAuth(state),
});

export default connect(mapStateToProps, {logout})(UserCard);