import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from '../General/Product';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

// SHOP UNTUK GET SEMUA PRODUK, .SLICE, DAN .MAP DENGAN IMPORT "SATUAN PRODUK.JS"
class EditBuyer extends Component {
    editUser = () => {
        this.props.editPembeli()
        .then(() => {
            alert('Success, Data Updated!')
            this.props.history.push("/");
            }
        )
    }

    render() {
        return (
            <div class="container">
                <h3 class="mt-0"><strong>Edit Profile</strong></h3>

                <form onSubmit={e => e.preventDefault()} >
                    <div class="form-row">
                        <div class="col-12 col-md-6 form-group">
                            <label>Edit Username</label>
                            <input onChange={ e => this.props.setField(e) } name="username" type="text" class="form-control" placeholder="" />
                        </div>
                        <div class="col-12 col-md-6 form-group">
                            <label>Edit Password</label>
                            <input onChange={ e => this.props.setField(e) } name="password" class="form-control" type="password" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Edit Full Name</label>
                        <input onChange={ e => this.props.setField(e) } name="fullName" type="text" class="form-control" placeholder="" />
                    </div>
                    <div class="form-row">
                        <div class="col-12 col-md-6 form-group">
                            <label>Edit Email</label>
                            <input onChange={ e => this.props.setField(e) } name="email" type="email" class="form-control" placeholder="" />
                        </div>
                        <div class="col-12 col-md-6 form-group">
                            <label>Edit Contact Number</label>
                            <input onChange={ e => this.props.setField(e) } name="contact" type="number" class="form-control" placeholder="" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Edit Address</label>
                        <input onChange={ e => this.props.setField(e) } name="address" type="text" class="form-control" />
                    </div>
                    <div class="form-group text-center">
                        <button onClick={ () => this.editUser() } type="submit" class="btn blue-btn"><i class="far fa-edit"></i> Update Profile </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect (
    '',
    actions)
(withRouter(EditBuyer));