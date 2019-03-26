import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import SignOut from './SignOut';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';
import { Redirect } from 'react-router-dom';

class HeaderSeller extends Component {
    postSignout = () =>{
        this.props.postLogout();
        this.props.history.replace("/");
    }
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
                    <Link class="nav-link" to='/dashboard'><i class="fas fa-user-circle"></i> My Dashboard</Link>
                </li>
                <li class="nav-item ml-3 mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link class="nav-link" to='/myproduct'><i class="fas fa-compact-disc"></i> My Product</Link>
                </li>
                <li class="nav-item ml-3 mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link class="nav-link" to='/'
                        onClick={() => this.postSignout()}>
                        <i class="fas fa-sign-out-alt"></i> Sign Out</Link>
                </li>
            </ul>
        )
    }
}

// export default connect(
//    'listSong,song,SongTitle,Images,Time,Cuaca,is_login, username', actions
// )(withRouter(Header));
export default withRouter(HeaderSeller)