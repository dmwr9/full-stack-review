import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {getUser} from '../redux/userReducer';

class Header extends React.Component {

    componentDidMount(){
        this.props.getUser();
    }

    render(){
    return <div className="header">
        {this.props.isLoggedIn ? 
        <div>
            <h5>Welcome, {this.props.user.username} </h5>
            <Link to="/">Login/Signup</Link>
            <Link to="/main">Main</Link>
        </div>
        :
        <h1>Please Login</h1>
        }
    </div>
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(Header);