import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


import Catagory from './CatagoryItem';

import games from '../../images/cate-1.png'
import music from '../../images/cate-2.jpg'
import decor from '../../images/cate-3.jpg'
import other from '../../images/cate-4.jpg'

class Catagories extends Component {
    render() {
        return (
            <section>
                <div class="container mt-5">
                    <div class="row mb-5">
                        <div class="col text-center pt-4">
                            <h2 class="pt-2 pb-2" style={{ borderTop: "2px #000F2C solid", borderBottom: "2px #000F2C solid" }}>Our Categories</h2>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col mb-2 mb-lg-0" data-aos="fade-up">
                            <Link to="/store/games" style={{ textDecoration: "none" }}>
                                <Catagory image={games} judul="Games" />
                            </Link>
                        </div>
                        <div class="col mb-2 mb-lg-0" data-aos="fade-up">
                            <Link to="/store/music" style={{ textDecoration: "none" }}>
                                <Catagory image={music} judul="Music" />
                            </Link>
                        </div>
                        <div class="col mb-2 mb-lg-0" data-aos="fade-up">
                            <Link to="/store/decor" style={{ textDecoration: "none" }}>
                                <Catagory image={decor} judul="Decoration" />
                            </Link>                        </div>
                        <div class="col mb-2 mb-lg-0" data-aos="fade-up">
                            <Link to="/store/other" style={{ textDecoration: "none" }}>
                                <Catagory image={other} judul="Other" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Catagories);