import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

class MyProductItem extends Component {
	getDetail = (e) => {
		this.props.getMyProductId(e.target.value)
			.then(() => {
				this.props.history.push('/editproduct');
			})
	};

	delProduct = (e) => {
		this.props.deleteProduct(e.target.value)
			.then( async () => {
				alert('Product Deleted!')
				await this.props.history.push('/store')
			})
	}
	render() {

		return (
			<div class="col-12 col-md-3 col-sm-6 my-3">
				<figure class="card card-product p-2 pb-3">
					<figcaption class="info-wrap pt-3">
						<a class="text-decoration-none">
							<div class="img-wrap text-center">
								<img src={this.props.image} height="140px" />
							</div>
							<hr />
							<p class="title mt-2 text-left px-3" style={{ fontWeight: 600 }}>
								{this.props.nama}</p></a>
						<div class='container-fluid'>
							<div class='row mx-auto'>
								<span>Rp {this.props.harga}</span>
							</div>
							<hr />
							<div class="action-wrap">
								<button value={this.props.idProduk} onClick={e => this.getDetail(e)} class="btn btn-info float-right"><i class="fas fa-edit"></i> Edit </button>
								<button value={this.props.idProduk} onClick={e => this.delProduct(e)} class="btn btn-danger float-left"><i class="far fa-trash-alt"></i> Delete </button>
							</div>
						</div>
					</figcaption>
				</figure>
			</div>
		);
	}
}

export default connect('', actions)
	(withRouter(MyProductItem));