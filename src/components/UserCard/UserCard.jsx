import React, {useState} from 'react';
import s from './UserCard.module.css'
import userPhoto from '../../assets/images/user.png';
import Preloader from "../common/Preloader/Preloader";
import cn from 'classnames';

const UserCard = (props) => {
    const [isMenuOpened, toggleMenu] = useState(false);

    return (
        <div className={s.wrapper} onClick={() => toggleMenu(!isMenuOpened)}>
        {
            props.isFetchingProfile ?
                <Preloader />
                :
                <>
                    <p className={s.name}>{props.profileData.fullName}</p>
                    <div className={s.avatarWrapper}>
                        <img className={s.avatar}
                             src={props.profileData.photos.small || userPhoto}
                             alt=""
                        />
                    </div>
                    <div className={cn(s.menu, {[s.opened]: isMenuOpened})}>
                        <div onClick={props.logout}>Logout</div>
                    </div>
                </>

        }
        </div>
    )
};

export default UserCard;