import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

import NewProductItem from './NewProductItem'

// NEW PRODUCTS UNTUK GET SEMUA PRODUK, .SLICE, DAN .MAP DENGAN IMPORT "SATUAN PRODUK.JS"
class NewProducts extends Component {
    componentDidMount = () => {
        this.props.GetPublic()
    };
    render() {
        return (
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col text-center pt-4">
                            <h2 className="py-2"
                                style={{
                                    borderTop: "2px #000F2C solid",
                                    borderBottom: "2px #000F2C solid"
                                }}>
                                New Products
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mb-5">
                        {this.props.listRetro
                            .slice(-4)
                            .map((item, key) => {
                                return <NewProductItem
                                    idProduk={item.id}
                                    nama={item.namaProduk}
                                    harga={item.harga}
                                    penjual={item.penjual}
                                    image={item.foto_produk}
                                />
                            }
                            )}
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(
    'listRetro', actions
)(withRouter(NewProducts));