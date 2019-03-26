import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';

class Transactions extends Component {
    getDetail = async (e) => {
        await this.props.getDetailTrans(e.target.value)
        this.props.history.push("/transactiondetail")

    };

    render() {
        return (

            <tr>
                <td>{this.props.idTrans}</td>
                <td>{this.props.paid}</td>
                <td class="text-center">
                    <button onClick={e => this.getDetail(e)} value={this.props.idTrans} class="btn btn-info"><i class="fas fa-info-circle"></i> Detail</button>
                </td>
            </tr>

        );
    }
}

export default connect (
    '', actions
) (withRouter(Transactions));