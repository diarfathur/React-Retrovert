import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';

import MyProducts from '../Component/MyProductSeller/MyProducts';
import AddProduct from '../Component/MyProductSeller/AddProduct';
import Catagories from '../Component/HomePage/Catagories';
import NewProducts from '../Component/HomePage/NewProducts';

import { Link } from 'react-router-dom';


class MyProduct extends Component {
    render() {
        if ((!this.props.is_login) && (this.props.userStatus !== "penjual")) {
            this.props.history.push('/')
        }
        return (
            <section>
                <div class="container-fluid mt-5">
                    <div class="row">
                        <div class="col-12 col-md-1"></div>
                        <div class="col-12 col-md-10">

                            <div class="card p-3 mb-5" style={{ border: 'none' }}>
                                <ul class="nav nav-pills">
                                    <li class="active mx-2"><a data-toggle="pill" href="#myproduct">My Products</a></li>
                                    <li><a class="mx-2" data-toggle="pill" href="#addproduct">Add Product</a></li>
                                </ul>
                                <hr />
                                <div class="tab-content">
                                    <div id="myproduct" class="tab-pane active">

                                        <MyProducts />

                                    </div>
                                    <div id="addproduct" class="tab-pane fade">

                                        <AddProduct />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-1"></div>

                    </div>
                </div>
            </section >
        );
    }
}
export default connect ('is_login, userStatus', actions)
(withRouter(MyProduct))