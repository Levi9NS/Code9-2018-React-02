import React from 'react';
import { Route } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import PostPage from './PostPage';

class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route path="/post" component={PostPage} />
                <NotificationContainer />
            </div>
        );
    }
}
export default App;
