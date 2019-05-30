import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                return (
                    <li className={match ? "nav-item active" : "nav-item"}>
                        <div className = 'nav-link'>
                            <Link to={to} >{label}</Link>
                        </div>
                    </li>
                )
            }}
        />
    )
}
export default class Nav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className = 'navbar-brand'>
                        <Link to='/'>Logo</Link>
                    </div>
                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <MenuLink to='/' activeOnlyWhenExact={true} label="Home" />
                            <MenuLink to='/products' label="Products" />
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </>
        )
    }
}