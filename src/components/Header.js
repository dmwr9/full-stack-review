import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

const Header = (props) => {
    return <div className="header">
        {props.isLoggedIn ? 
        <div>
            <h5>Welcome, {props.user.username} </h5>
            <Link to="/">Login/Signup</Link>
            <Link to="/main">Main</Link>
        </div>
        :
        <h1>Please Login</h1>
        }
        
    </div>
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Header);