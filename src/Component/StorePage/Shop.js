import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from '../General/Product';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

// SHOP UNTUK GET SEMUA PRODUK, .SLICE, DAN .MAP DENGAN IMPORT "SATUAN PRODUK.JS"
class Shop extends Component {
    componentDidMount = () => {
        this.props.GetPublic()
    };


    render() {
        return (
            <section>
                <div class="container">
                    <div class="row mb-5">

                        {this.props.listRetro.map((item, key) => {
                            return <Product
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
)(withRouter(Shop));