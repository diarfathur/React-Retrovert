import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import SellerSignUp from '../Component/AuthPage/SellerSignUp'
import BuyerSignUp from '../Component/AuthPage/BuyerSignUp'

class SignUp extends Component {
    render() {
        return (
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <h2 class="py-2 mt-4 mx-auto"
                            style={{
                                borderTop: "2px #000F2C solid",
                                borderBottom: "2px #000F2C solid"
                            }}>Register</h2>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-md-3"></div>
                        <div class="col-12 col-md-6">

                            <div class="card box-signup my-5">
                                <ul class="nav mx-auto my-2 pt-3 nav-pills" style={{ fontSize: "18px" }}>
                                    <li class="active mx-2 px-4 text-white"><a data-toggle="pill" href="#buyer"><button class="btn blue-btn">Customer</button></a></li>
                                    <li class="mx-2 px-4 text-white float-right"><a data-toggle="pill" href="#seller"><button class="btn blue-btn">Seller</button></a></li>
                                </ul>
                                <hr />
                                <div class="tab-content">
                                    <div id="buyer" class="tab-pane active">
                                        <BuyerSignUp />
                                    </div>
                                    <div id="seller" class="tab-pane fade">
                                        <SellerSignUp />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-12 col-md-3"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(SignUp);