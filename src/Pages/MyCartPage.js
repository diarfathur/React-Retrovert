import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';

import CartItem from '../Component/MyCartPage/Cart'

class MyCartPage extends Component {
    componentDidMount = () => {
        console.log()
        this.props.getCart()
    };

    newTransaction = () => {
        this.props.postTransaksi()
        this.props.histpry.push("/store")
    }
    render() {
        if ((!this.props.is_login) && (this.props.userStatus !== "pembeli")) {
            this.props.history.push('/')
        }

        return (
            <section>
                <div class="container text-center">
                    <h2 class="py-2 mt-5"
                        style={{
                            borderTop: "2px #000F2C solid",
                            borderBottom: "2px #000F2C solid"
                        }}>My Cart</h2>
                </div>
                <div class="container my-5">
                    <div class="row">
                        <div class='col-12 col-md-8 mb-4'>
                            <div class="card shadow">
                                <div class="container">

                                    {this.props.listCart.map((item, key) => {
                                        return <CartItem
                                            idCart={item.id}
                                            image={item.gambarProduk}
                                            nama={item.namaProduk}
                                            harga={item.hargaSatuan}
                                            order={item.qty}
                                            sub={item.totalHarga}
                                        />
                                    })}

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                            <dl class="row p-2 pt-3">

                                <dt class="col-6">Total Payment</dt>
                                <dd class="col-6">Rp {this.props.sumCart}</dd>

                            </dl>
                            <hr />
                            <div class="row justify-content-center">
                                <button onClick={() => this.newTransaction()} class="btn btn-warning"><i class="fas fa-dollar-sign"></i> Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect('is_login, userStatus, listCart, sumCart', actions)
    (withRouter(MyCartPage));