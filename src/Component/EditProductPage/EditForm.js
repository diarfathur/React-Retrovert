import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

class EditForm extends Component {
    editProduct = (e) => {
        console.log("response id", this.props.itemDetail)

        this.props.editMyProduct(e.target.value)
            .then(() => {
                alert("Your Product Has Been Updated!")
                this.props.history.push('/store')
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <div class='card p-3'>
                    <form onSubmit={e => e.preventDefault()} >
                        <h2>Editing Form</h2>
                        <div class="form-row">
                            <div class="col-12 form-group">
                                <label>Product Name</label>
                                <input onChange={e => this.props.setField(e)}
                                    value={this.props.namaProduk} name="namaProduk"
                                    type="text" class="form-control" placeholder="" />
                            </div>
                            <div class="col-12 form-group">
                                <label>Price</label>
                                <input onChange={e => this.props.setField(e)}
                                    value={this.props.harga} name="harga"
                                    type="number" class="form-control" placeholder="" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Category</label>
                            <div>
                                <label class="form-check form-check-inline col">
                                    <input onClick={e => this.props.setCategory(e)} class="form-check-input" type="radio"
                                        value="Games" />
                                    <span class="form-check-label"> Games </span>
                                </label>
                                <label class="form-check form-check-inline col">
                                    <input onClick={e => this.props.setCategory(e)} class="form-check-input" type="radio"
                                        value="Music" />
                                    <span class="form-check-label"> Music </span>
                                </label>
                                <label class="form-check form-check-inline col">
                                    <input onClick={e => this.props.setCategory(e)} class="form-check-input" type="radio"
                                        value="Decoration" />
                                    <span class="form-check-label"> Decoration </span>
                                </label>
                                <label class="form-check form-check-inline col">
                                    <input onClick={e => this.props.setCategory(e)} class="form-check-input" type="radio"
                                        value="Other" />
                                    <span class="form-check-label"> Other </span>
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Stock</label>
                            <input onChange={e => this.props.setField(e)} value={this.props.stock} name="stock" type="number" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label>Product Photo</label>
                            <input onChange={e => this.props.setField(e)} value={this.props.foto_produk} name="foto_produk" type="url" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label>Description</label><br />
                            <textarea onChange={e => this.props.setField(e)} value={this.props.deskripsi_produk} name="deskripsi_produk" style={{ width: '100%', height: '100px' }}></textarea>
                        </div>
                        <div class="form-group text-center">
                            <button onClick={(e) => this.editProduct(e)} value={this.props.itemDetail.id} type="submit" class="btn blue-btn"><i class="fas fa-edit"></i> Edit Product</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(
    'itemDetail, namaProduk, harga, stock, kategori, foto_produk, deskripsi_produk',
    actions)
    (withRouter(EditForm));