import React, {Component} from 'react';
import Request from '../utils/request';
import './base.css';


export default class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {menu: null, loading: false};
        this.request = new Request();
    }

    render() {
        return(
            <div className="row" id="wrapper">
                <nav className="sidebar bg-dark">
                    <div className="sidebar-content">
                        <a id="sidebar-logo" href="/">
                            <i className="fa fa-youtube-square fa-2x" aria-hidden="true"></i>
                            <span className="font-logo">VLOG</span>
                        </a>
                    </div>
                </nav>
                <div className="main">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/">Navbar1</a>
                        <a className="navbar-brand" href="/">Navbar2</a>
                        <a className="navbar-brand" href="/">Navbar3</a>
                        <form className="form-inline ml-auto">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        </form>
                    </nav>
                    <main className="container">
                        <h1>main</h1>
                    </main>
                    {/*<footer className="footer bg-light">*/}
                        {/*<div className="container">*/}
                            {/*<h1>footer</h1>*/}
                        {/*</div>*/}
                    {/*</footer>*/}
                </div>
            </div>
        )
    }
}
