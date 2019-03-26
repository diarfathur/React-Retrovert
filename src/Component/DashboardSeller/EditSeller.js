import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

// SHOP UNTUK GET SEMUA PRODUK, .SLICE, DAN .MAP DENGAN IMPORT "SATUAN PRODUK.JS"
class EditSeller extends Component {
    editUser = () => {
        this.props.editPenjual()
            .then(() => {
                alert('Success, Data Updated!')
                this.props.history.push("/");
            })
    };

    render() {
        return (
            <div class="container">
                <h3 class="mt-0"><strong>Edit Profile</strong></h3>

                <form onSubmit={e => e.preventDefault()} >
                    <div class="form-row">
                        <div class="col-12 col-md-6 form-group">
                            <label>Username</label>
                            <input onChange={e => this.props.setField(e)} name="username" type="text" class="form-control" placeholder="" />
                        </div>
                        <div class="col-12 col-md-6 form-group">
                            <label>Create Password</label>
                            <input onChange={e => this.props.setField(e)} name="password" class="form-control" type="password" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Shop Name</label>
                        <input onChange={e => this.props.setField(e)} name="shopName" type="text" class="form-control" placeholder="" />
                    </div>
                    <div class="form-row">
                        <div class="col-12 col-md-6 form-group">
                            <label>Email</label>
                            <input onChange={e => this.props.setField(e)} name="email" type="email" class="form-control" placeholder="" />
                        </div>
                        <div class="col-12 col-md-6 form-group">
                            <label>Contact Number</label>
                            <input onChange={e => this.props.setField(e)} name="contact" type="number" class="form-control" placeholder="" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input onChange={e => this.props.setField(e)} name="address" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Photo Profile</label>
                        <input onChange={e => this.props.setField(e)} name="avatar" type="url" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Description</label><br />
                        <textarea onChange={e => this.props.setField(e)} name="deskripsiPenjual" style={{width:'100%', height:'100px'}}></textarea>                                        
                    </div>
                    <div class="form-group text-center">
                        <button onClick={() => this.editUser()} type="submit" class="btn blue-btn"><i class="far fa-edit"></i> Update Profile </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(
    '',
    actions)
    (withRouter(EditSeller));