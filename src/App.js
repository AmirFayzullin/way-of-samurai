import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp, showError} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {getInitialized} from "./redux/appSelectors";
import s from './App.module.css';
import withSuspense from "./components/common/Suspense/Suspense";
import ErrorsDisplay from "./components/ErrorMessage/ErrorMessage";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends Component {
    catchAllUnhandledErrors = (e) => {
        this.props.showError(`reason: ${e.reason}`);
    };

    componentDidMount() {
        this.props.initializeApp();
        this.listener = window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.listener);
    }

    render() {
        if (!this.props.initialized) {
            return (
                <div className={s.preloaderWrapper}>
                    <Preloader/>
                </div>
            )
        }

        return (
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <ErrorsDisplay/>
                <div className={s.appWrapperContent}>
                    <Switch>
                        <Route path={'/'} exact render={() => <Redirect to='/profile'/>}/>
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}
                        />
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}
                        />
                        <Route path='/login'
                               render={() => <Login/>}
                        />
                        <Route path='/users'
                               render={() => <UsersContainer/>}
                        />
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mstp = (state) => ({
    initialized: getInitialized(state),
});

export default connect(mstp, {initializeApp, showError})(App);
