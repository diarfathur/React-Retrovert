import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import SignOut from './SignOut';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';
import { Redirect } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <ul class="navbar-nav ml-auto text-center">
                <li class="nav-item ml-3 mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link class="nav-link" to="/"><i class="fas fa-home"></i> Home</Link>
                </li>
                <li class="nav-item ml-3 mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link class="nav-link" to="/store"><i class="fas fa-store"></i> Store</Link>
                </li>
                <li class="nav-item ml-3 mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link class="nav-link" to='/signin'><i class="fas fa-sign-in-alt"></i> Sign In</Link>
                </li>
                <li class="nav-item ml-3 mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link class="nav-link" to="/register"><i class="fas fa-user-plus"></i> Register</Link>
                </li>
            </ul>
        )
    }
}

// export default connect(
//    'listSong,song,SongTitle,Images,Time,Cuaca,is_login, username', actions
// )(withRouter(Header));
export default withRouter(Header)