import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import EditForm from '../Component/EditProductPage/EditForm'
import DetailProduct from '../Component/EditProductPage/DetailMyProduct'

// SHOP UNTUK GET SEMUA PRODUK, .SLICE, DAN .MAP DENGAN IMPORT "SATUAN PRODUK.JS"
class EditProductPage extends Component {

    render() {
        if ((!this.props.is_login) && (this.props.userStatus !== "penjual")) {
            this.props.history.push('/')
        }
        console.log("adudududu", this.props.itemDetail)
        return (
            <section>
                <div class="container-fluid text-center">
                    <h2 class="py-2 mt-5"
                        style={{
                            borderTop: "2px #000F2C solid",
                            borderBottom: "2px #000F2C solid"
                        }}>Editing Product</h2>
                </div>
                <div class="container-fluid my-5">
                    <div class='row'>
                        <div class='col-md-8 col-12 mb-4'>
                            <DetailProduct 
                                // image={this.props.itemDetail.}
                                />
                        </div>
                        <div class='col-md-4 col-12'>
                            <EditForm />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect('is_login, userStatus, itemDetail', actions)
    (withRouter(EditProductPage));