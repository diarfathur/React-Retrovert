import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';

import MyProfile from '../Component/DashboardBuyer/ProfileBuyer';
import EditProfile from '../Component/DashboardBuyer/EditBuyer';
import Transaction from '../Component/DashboardBuyer/Transaction';


import { Link } from 'react-router-dom';


class DashboardBuyer extends Component {
    deleteUser = () => {
        this.props.deletePembeli()
            .then(() => {
                alert('Data Deleted, Bye!')
                this.props.history.push("/");
            })
    };

    render() {
        if ((!this.props.is_login) && (this.props.userStatus !== "pembeli")) {
            this.props.history.push('/')
        }
        return (
            <section>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-12 col-md-8">

                            <div class="card p-3 mb-5" style={{ border: 'none' }}>
                                <ul class="nav nav-pills">
                                    <li class="active mx-2"><a data-toggle="pill" href="#myProfile">My Profile</a></li>
                                    <li><a class="mx-2" data-toggle="pill" href="#editProfile">Edit Profile</a></li>
                                    <li><a class="mx-2" data-toggle="pill" href="#delAcc">Delete Profile</a></li>
                                </ul>
                                <hr />
                                <div class="tab-content">
                                    <div id="delAcc" class="tab-pane fade">
                                        <div class="col-md-6 col-12 ">
                                            <h3 style={{ color: "red" }}>Delete Account</h3>

                                            <div class="card box p-3 ml-auto mr-auto">
                                                <form>
                                                    <h5>Are you sure want to delete your precious account?</h5>
                                                    <div class="form-row">
                                                        <div class="col form-group">
                                                            <button onClick={ () => this.deleteUser() } type="submit" class="btn red-btn btn-block"> Yes
                                                        </button>
                                                        </div>
                                                        <div class="col form-group">
                                                            <Link to="/"><button class="btn blue-btn btn-block"> No
                                                        </button></Link> 
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="myProfile" class="tab-pane active">
                                        <MyProfile />
                                        {/* Seller Profile Goes Here */}
                                    </div>
                                    <div id="editProfile" class="tab-pane fade">
                                        <EditProfile />

                                        {/* Seller Product Goes Here */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <Transaction/>
                        </div>

                    </div>
                </div>
            </section >
        );
    }
}
export default connect ('is_login, userStatus', actions)
(withRouter(DashboardBuyer))