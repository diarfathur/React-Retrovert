import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';
import { Redirect } from 'react-router-dom';

class Search extends Component {

    render() {
        return (
            <div class="jumbotron">
                <p><img src={this.props.image} width="70%" alt="" /></p>
                <p class="lead">This is our store.</p>
                <hr class="my-4" />
                <p>You can buy any retro stuff here with best deal.</p>
            </div>
        );
    }
}

export default withRouter(Search);