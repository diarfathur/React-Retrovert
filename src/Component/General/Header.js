import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import SignOut from './SignOut';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';
import { Redirect } from 'react-router-dom';

import HeaderSeller from './HeaderSeller';
import HeaderBuyer from './HeaderBuyer';
import HeaderPublic from './HeaderPublic';

import '../../css/header.css'

class Header extends Component {
    render() {
        if ((!this.props.is_login) && (this.props.userStatus == "")) {
            return (
                <header>
                    <nav class="navbar navbar-expand-lg fixed-top menu">
                        <Link class="navbar-brand pl-2" to="/"><img src={require('../../images/logo/logo.png')} width="30%" alt="" /></Link>

                        <button class="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="expand-icon fas fa-bars"></i>
                        </button>

                        <div class="collapse navbar-collapse float-right pr-2" id="navbarSupportedContent">

                            <HeaderPublic />

                        </div>

                    </nav>
                    <div class="backbox"></div>
                </header>
            )
        } else if ((this.props.is_login == true) && (this.props.userStatus == 'pembeli')) {
            return (
                <header>
                    <nav class="navbar navbar-expand-lg fixed-top menu">
                        <Link class="navbar-brand pl-2" to="/"><img src={require('../../images/logo/logo.png')} width="30%" alt="" /></Link>

                        <button class="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="expand-icon fas fa-bars"></i>
                        </button>

                        <div class="collapse navbar-collapse float-right pr-2" id="navbarSupportedContent">

                            <HeaderBuyer />

                        </div>

                    </nav>
                    <div class="backbox"></div>
                </header>
            )
        } else if ((this.props.is_login) && (this.props.userStatus === 'penjual')) {
            return (
                <header>
                    <nav class="navbar navbar-expand-lg fixed-top menu">
                        <Link class="navbar-brand pl-2" to="/"><img src={require('../../images/logo/logo.png')} width="30%" alt="" /></Link>

                        <button class="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="expand-icon fas fa-bars"></i>
                        </button>

                        <div class="collapse navbar-collapse float-right pr-2" id="navbarSupportedContent">

                            <HeaderSeller />

                        </div>

                    </nav>
                    <div class="backbox"></div>
                </header>
            )
        }
    }
}

export default connect(
    'is_login, userStatus', actions
)(withRouter(Header));
// export default withRouter(Header)