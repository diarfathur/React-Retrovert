// Import package
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Link } from 'react-router-dom';

import "../css/shop.css"


class ShopPage extends Component {
    postNewCart = async () => {
        if ((!this.props.is_login) && (this.props.userStatus !== "pembeli")) {
            await this.props.history.push('/')
        }
        await this.props.postCart()
        this.props.history.push("/")
    }

    render() {

        return (
            <div className="App">
                <div class="container">
                    <h2 class="py-2 my-4"
                        style={{
                            borderTop: "2px #000F2C solid",
                            borderBottom: "2px #000F2C solid"
                        }}>Detail Product</h2>
                </div>
                <div class="container">
                    <div class="row my-4">
                        <div class='container'>
                            <div class="card">
                                <div class="row">
                                    <aside class="col-md-6 col-12">
                                        <article class="gallery-wrap">
                                            <div class="img-big-wrap p-4">
                                                <img src={this.props.itemDetail.foto_produk} width="100%" />
                                            </div>
                                        </article>
                                    </aside>
                                    <aside class="col-md-6 col-12">
                                        <article class="p-4 text-left">
                                            <h3 class="title mb-3">{this.props.itemDetail.namaProduk}</h3>

                                            <div class="mb-3">
                                                <var class="price h3 text-warning">
                                                    <span class="currency">Rp</span>
                                                    <span class="num"> {this.props.itemDetail.harga}</span>
                                                </var>
                                            </div>

                                            <dl class="row">
                                                <dt class="col-sm-4">Shop</dt>
                                                <dd class="col-sm-8">{this.props.itemDetail.penjual}</dd>

                                                <dt class="col-sm-4">Category</dt>
                                                <dd class="col-sm-8">{this.props.itemDetail.kategori}</dd>

                                                <dt class="col-sm-4">Stock</dt>
                                                <dd class="col-sm-8">{this.props.itemDetail.qty}</dd>
                                            </dl>
                                            <hr />
                                            <div class="row">
                                                <div class="col-12">
                                                    <form onSubmit={e => e.preventDefault()}>
                                                        <dl class="dlist-inline">
                                                            <label><dt>Quantity: </dt></label>
                                                            <dd>
                                                                <input onChange={e => this.props.setField(e)}
                                                                    name="orderQty"
                                                                    type="number"
                                                                    class="form-control"
                                                                    placeholder="" />
                                                            </dd>
                                                        </dl>
                                                    </form>
                                                </div>
                                                <div class='col-12'>
                                                    <a class="btn btn-info float-right text-white"
                                                        value={this.props.itemDetail.id}
                                                        onClick={() => this.postNewCart()}>
                                                        <i class="fas fa-shopping-cart"></i> Add to Cart </a>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class='col'>
                                                    <dl>
                                                        <dt>Description</dt>
                                                        <dd><p>{this.props.itemDetail.deskripsi_produk}</p></dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </article>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}
export default connect(
    'itemDetail, orderQty, idProduk', actions)
    (withRouter(ShopPage));