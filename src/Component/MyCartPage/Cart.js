import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

class Cart extends Component {
    delCart = async (e) => {
		this.props.deleteCart(e.target.value)
        this.props.history.replace('/myprofile')

	}
    render() {
        return (
            <div class="row border">
                <aside class="col-3">
                    <article class="gallery-wrap pt-2 text-center">
                        <img src={this.props.image} width="75px" />
                    </article>
                </aside>
                <aside class="col-9">
                    <div class="row">
                        <div class="col-12">
                            <div class="row pt-2 pb-2">
                                <span class="col-12" style={{ fontWeight: "600" }}>{this.props.nama}</span>
                                <span class="col-12 text-muted">x{this.props.order}</span>
                                <span class="col-12 text-danger">Rp {this.props.sub} <sub class="text-muted"> (Rp {this.props.harga}/<sub>each</sub>)</sub></span>
                                <span class="col-12 p-2">
                                    <button onClick={(e) => this.delCart(e)} value = {this.props.idCart} class="btn btn-danger float-right fas fa-trash-alt"> </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }
}

export default connect('', actions)
    (withRouter(Cart));