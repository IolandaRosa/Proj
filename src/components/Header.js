import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="ui inverted segment">
            <div className="ui inverted secondary menu">
                <Link className="item" to="/">
                    <i className="home icon"></i>
                    Home
                </Link>

                <div className="right menu">
                    <div className="item">
                        <div className="ui blue button"><i className="facebook icon"></i>Login</div>
                    </div>
                    <div className="item">
                        <div className="ui grey button"><i className="user icon"></i>Sign Up</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;