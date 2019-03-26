import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Carousel extends Component {
    render() {
        return (
            <div className="container-float">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require("../../images/car-1.jpg")} class="d-block w-100" />
                            <div class="carousel-caption d-md-block middle">
                                <img src={require("../../images/logo/retrovert-white.png")} width="70%" alt="" />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={require("../../images/car-2.jpg")} class="d-block w-100" />
                            <div class="carousel-caption d-md-block">
                                <img src={require("../../images/logo/retrovert-white.png")} width="70%" alt="" />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={require("../../images/car-3.jpg")} class="d-block w-100" />
                            <div class="carousel-caption d-md-block">
                                <img src={require("../../images/logo/retrovert-white.png")} width="70%" alt="" />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={require("../../images/car-4.jpg")} class="d-block w-100" />
                            <div class="carousel-caption d-md-block">
                                <img src={require("../../images/logo/retrovert-white.png")} width="70%" alt="" />
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    </a>
                </div>
            </div>
        );
    }
}

export default Carousel;