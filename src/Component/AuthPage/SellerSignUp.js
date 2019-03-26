import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SellerSignUp extends Component {
    signUpPenjual = function () {
        this.props.postPenjualBaru().then(
            () => {
                alert("Register Success");
                this.props.history.push("/signin");
            }
        )
    };

    render() {
        return (
            <article class="card-body">
                <h4 class="card-title my-1"><strong>Hello, New Seller!</strong></h4>
                <p class="card-title mb-4"><strong>Please register here</strong></p>
                <form onSubmit={e => e.preventDefault()}>
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
                        <button onClick={() => this.signUpPenjual()} type="submit" class="btn blue-btn btn-block"> Register </button>
                    </div>
                    <small class="text-muted">By clicking the 'Register' button, you confirm that you
                        accept our Terms of use and Privacy Policy.</small>
                </form>
                <div class="border-top card-body text-center">Have an account? <Link to="/signin">Sign In</Link></div>

            </article>

        );
    }
}

export default connect (''
    , actions
)
(withRouter(SellerSignUp));