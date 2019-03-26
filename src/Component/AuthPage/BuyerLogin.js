import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class BuyerLogin extends Component {
    postLogin = () => {
        this.props.postLoginPembeli()
        .then(() => {
            this.props.history.push("/myprofile");
            }
        )
    };

    render() {
        return (
            <article class="card-body">
                <h4 class="card-title mb-4 mt-1"><strong>Welcome, Customer!</strong></h4>
                <form onSubmit={e => e.preventDefault()}>
                    <div class="form-group">
                        <input name="username" class="form-control" placeholder="Username" onChange={e => this.props.setField(e)} type="text" />
                    </div>
                    <div class="form-group">
                        <a class="float-right forgot" href="#">Forgot?</a>
                        <input name="password" class="form-control" placeholder="Password" onChange={e => this.props.setField(e)} type="password" />
                    </div>
                    <div class="form-group">
                        <div class="checkbox">
                            <label><input type="checkbox" /> Save password </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn blue-btn btn-block" onClick={ () => this.postLogin() }> Sign In </button>
                    </div>
                </form >
                <div class="border-top card-body text-center">Haven't any account yet? <Link to="/signup">Register</Link></div>

            </article >
        );
    }
}

export default connect ('username,password,is_login', actions)
(withRouter(BuyerLogin))