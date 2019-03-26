import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';
import TransactionTable from './TransactionTable'

class Transactions extends Component {
    componentDidMount = () => {
        this.props.getAllTrans()
    };
    render() {
        return (
            <div>
                <h3>Transactions</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Total Payment</th>
                            <th scope="col">History</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listTransaksi.map((item, key) => {
                            return <TransactionTable
                                idTrans={item.id}
                                paid={item.totalPembayaran}
                            />
                        }
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    'listTransaksi', actions
)(withRouter(Transactions));