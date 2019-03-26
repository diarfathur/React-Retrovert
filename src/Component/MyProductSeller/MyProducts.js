import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './MyProductItem';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

// SHOP UNTUK GET SEMUA PRODUK, .SLICE, DAN .MAP DENGAN IMPORT "SATUAN PRODUK.JS"
class MyProducts extends Component {
    componentDidMount = () => {
        this.props.getMyProduct()
    };

    render() {
        return (
            <section>
                <div class="container">
                    <div class="row mb-5">
                        {this.props.listMyItem.map((item, key) => {
                            return <ProductItem
                                idProduk={item.id}
                                nama={item.namaProduk}
                                harga={item.harga}
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
    'listMyItem',
    actions)
    (withRouter(MyProducts));