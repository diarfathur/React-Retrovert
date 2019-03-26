// Import package
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';

import Carousel from '../Component/HomePage/Carousel';
import Catagories from '../Component/HomePage/Catagories';
import NewProducts from '../Component/HomePage/NewProducts';

import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="App">
                <Carousel/>
                <h1 class="mt-5 pt-5" style={{fontWeight: 700}}>We Sell Stuff For Your Retro Desire</h1>
                <Catagories/>
                <NewProducts />
            </div>
        );
    }
}
export default withRouter(Home)