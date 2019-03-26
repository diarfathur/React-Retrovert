import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

class Product extends Component {
	getDetail = (e) => {
		this.props.getId(e.target.value);
		this.props.history.push('/detailproduct');
	};

	render() {
		return (
			<div class="col-12 col-md-3 col-sm-6 my-3">
				<figure class="card card-product p-2 pb-3">
					<figcaption class="info-wrap pt-3">
						<a class="text-decoration-none">
							<div class="img-wrap">
								<img src={this.props.image} height="150px" />
							</div>
							<hr />
							<p class="title mt-2 text-left px-3" style={{ fontWeight: 600 }}>
								{this.props.nama}</p></a>
						<div class='container-fluid'>
							<div class='row mx-auto'>
								<p >Rp {this.props.harga}</p>
							</div>
							<div class='row mx-auto'>
								<Link to="#">{this.props.penjual}</Link>
							</div>
							<hr />
							<div class="action-wrap">
								<button
									value={this.props.idProduk}
									onClick={e => this.getDetail(e)}
									class="btn btn-info mr-2">
									<i class="fas fa-cart-plus"></i> Add to Cart</button>
							</div>
						</div>
					</figcaption>
				</figure>
			</div>
		);
	}
}

export default connect('', actions)
	(withRouter(Product));