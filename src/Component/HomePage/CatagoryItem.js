import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';

class CatagoryItem extends Component {

    render() {
        return (
            <div className="card text-white" data-aos="fade-up" style={{ backgroundColor: "#f6eee3", border: "none" }}>
                <center> <img style={{ border: "10px solid #000F2C", borderRadius: "50%", width: "15rem" }} className="card-img-top shadow-lg" src={this.props.image} alt="Card image cap" /></center>
                <div className="card-body">
                    <h5 className="card-title" style={{ color: "#000F2C", textDecoration: "none" }}>{this.props.judul}</h5>
                </div>
            </div>
        );
    }
}

export default withRouter(CatagoryItem)