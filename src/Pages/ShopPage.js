// Import package
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Link } from 'react-router-dom';

import Search from '../Component/General/Search';
import Shop from '../Component/StorePage/Shop';

import "../css/shop.css"


class ShopPage extends Component {
    render() {
        return (
            <div className="App">
                <div class="jumbotron jumbo-store">
                    <p><img src={require("../images/logo/retrovert-white.png")} width="50%" alt="" /></p>
                    <h4>You can buy any retro stuff here with the best price</h4>
                </div>
                <div class="container">
                    <h2 class="py-2 my-4"
                        style={{
                            borderTop: "2px #000F2C solid",
                            borderBottom: "2px #000F2C solid"
                        }}>This is our Retro Stuff</h2>
                </div>
                <Search />
                <Shop />
            </div>
        );
    }
}
export default withRouter(ShopPage);