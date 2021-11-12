import React from 'react'
import { Link } from 'react-router-dom';
import { HeaderBar } from "../header/HeaderBar";

export const Layout = ({ children }) => {
    return (
        <div className="layout" >
            <div className="header-and-navigation">
                <HeaderBar />
                <hr/>
                <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/people">People</Link></li>
                    <li><Link to="/starships">Starships</Link></li>
                    <li><Link to="/planets">Planets</Link></li>
                </ul>
            </div>
            <div className="page">
                {children}
            </div>
        </div>
    )
}