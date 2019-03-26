import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';

import TransItem from '../Component/MyCartPage/Trans'


class TransactionDetail extends Component {
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
                        }}>Detail Transaction</h2>
                </div>
                <div class="container my-5">
                    <div class="row">
                        <div class='col-12 col-md-8 mb-4'>
                            <div class="card shadow">
                                <div class="container">

                                    {this.props.listCart.map((item, key) => {
                                        return <TransItem
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
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect ('is_login, userStatus, listCart, sumCart', actions)
(withRouter(TransactionDetail));