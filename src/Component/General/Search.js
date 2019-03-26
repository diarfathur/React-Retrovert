import React, { Component } from "react";
import "../../css/search.css";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../../store';
import { Redirect } from 'react-router-dom';

class Search extends Component {
    // handleInputChange = e => {
    //     let value = e.target.value;
    //     this.props.searchNews(value);
    // };

    render() {
        return (
            <div className="container my-2">
                <div class="row justify-content-end">
                    <div class="col-12 col-md-4 align-self-end">
                        {/* <form onSubmit={e => { e.preventDefault(); }} className="form-search"> */}
                        <form className="form-search float-right">
                            <input
                                type="search"
                                placeholder="Search"
                                name="search"
                            //   onChange={this.props.doSearch}
                            />
                            <i class="fa fa-search"></i>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;