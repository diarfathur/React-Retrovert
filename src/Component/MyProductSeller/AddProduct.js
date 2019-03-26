import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from '../General/Product';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

class AddProduct extends Component {
    postNewProduct = function () {
        this.props.postProduct().then(
            () => {
                alert("Success, Your Product Has Added!");
                this.props.history.push("/dashboard");
            }
        )
    };

    render() {
        return (
            <div className="container">
                <h3 className="mt-0"><strong>Add Product</strong></h3>

                <form onSubmit={e => e.preventDefault()} >
                    <div className="form-row">
                        <div className="col-12 col-md-6 form-group">
                            <label>Product Name</label>
                            <input onChange={e => this.props.setField(e)} name="namaProduk" type="text" className="form-control" placeholder="" />
                        </div>
                        <div className="col-12 col-md-6 form-group">
                            <label>Price</label>
                            <input onChange={e => this.props.setField(e)} name="harga" type="number" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label>Category</label>
                            <div className='col'>
                                <label className="form-check form-check-inline">
                                    <input onClick={e => this.props.setCategory(e)} className="form-check-input" type="radio" name="category"
                                        value="Games" />
                                    <span className="form-check-label"> Games </span>
                                </label>
                                <label className="form-check form-check-inline">
                                    <input onClick={e => this.props.setCategory(e)} className="form-check-input" type="radio" name="category"
                                        value="Music" />
                                    <span className="form-check-label"> Music </span>
                                </label>
                                <label className="form-check form-check-inline">
                                    <input onClick={e => this.props.setCategory(e)} className="form-check-input" type="radio" name="category"
                                        value="Decoration" />
                                    <span className="form-check-label"> Decoration </span>
                                </label>
                                <label className="form-check form-check-inline">
                                    <input onClick={e => this.props.setCategory(e)} className="form-check-input" type="radio" name="category"
                                        value="Other" />
                                    <span className="form-check-label"> Other </span>
                                </label>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 form-group">
                            <label>Jumlah Barang</label>
                            <input onChange={e => this.props.setField(e)} name="stock" type="number" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Product Photo</label>
                        <input onChange={e => this.props.setField(e)} name="foto_produk" type="url" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Product Description</label>
                        <textarea onChange={e => this.props.setField(e)} name="deskripsi_produk" style={{ width: '100%', height: '100px' }}></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button onClick={() => this.postNewProduct()} type="submit" className="btn blue-btn"><i class="fas fa-plus"></i> Add Product</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default connect(
    '',
    actions)
    (withRouter(AddProduct));