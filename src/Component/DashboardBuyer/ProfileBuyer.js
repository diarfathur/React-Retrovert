import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from '../General/Product';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

// SHOP UNTUK GET SEMUA PRODUK, .SLICE, DAN .MAP DENGAN IMPORT "SATUAN PRODUK.JS"
class MyProfileSeller extends Component {
    render() {
        return (
            <div class="container">
                <h3 class="mt-0"><strong>{this.props.fullName}</strong></h3>
                <div class='row'>
                    <div class='col-12 col-md-4'>
                        <img src={require('../../images/tuner.png')} class="align-self-start mb-3" width='100%' />
                    </div>
                    <div class="col-12 col-md-8">
                        <dl class="row">
                            <dt class="col-sm-3">Username</dt>
                            <dd class="col-sm-9">{this.props.username}</dd>

                            <dt class="col-sm-3">Contact</dt>
                            <dd class="col-sm-9">+62-8{this.props.contact}</dd>

                            <dt class="col-sm-3">Email</dt>
                            <dd class="col-sm-9">{this.props.email}</dd>

                            <dt class="col-sm-3">Address</dt>
                            <dd class="col-sm-9">{this.props.address}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect (
    'username, fullName, contact, email, address',
    actions)
(withRouter(MyProfileSeller));