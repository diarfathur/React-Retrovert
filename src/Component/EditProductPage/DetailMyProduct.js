import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

class DetailProduct extends Component {

    render() {

        return (
            <div class='container-fluid'>
                <div class="card">
                    <div class="row">
                        <aside class="col-md-6 col-12">
                            <article class="gallery-wrap">
                                <div class="img-big-wrap p-4 mb-0">
                                    <img src={this.props.itemDetail.foto_produk} width="100%" />
                                </div>
                            </article>
                        </aside>
                        <aside class="col-md-6 col-12">
                            <article class="p-4 pr-2 text-left">
                                <h3 class="title mb-3">{this.props.itemDetail.namaProduk}</h3>

                                <div class="mb-3">
                                    <var class="price h3 text-warning">
                                        <span class="currency">Rp</span>
                                        <span class="num"> {this.props.itemDetail.harga}</span>
                                    </var>
                                </div>

                                <dl class="row">
                                    <dt class="col-sm-5">Shop</dt>
                                    <dd class="col-sm-7">{this.props.itemDetail.penjual}</dd>

                                    <dt class="col-sm-5">Category</dt>
                                    <dd class="col-sm-7">{this.props.itemDetail.kategori}</dd>

                                    <dt class="col-sm-5">Stock</dt>
                                    <dd class="col-sm-7">{this.props.itemDetail.qty}</dd>
                                </dl>
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

        );
    }
}

export default connect('itemDetail', actions)
    (withRouter(DetailProduct));