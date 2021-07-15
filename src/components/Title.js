import React from 'react';
import '../styles/Title.css';
import { NavLink } from 'react-router-dom';


function Title(props) {
    return (
        <div className="container">
            <div className="Title">
              <header>
                <h1>Aniplace</h1>
                <div className="Title-Subtitle"><h5>Aniplace, The listings of the best Anime!</h5></div>

                <div>
                    <NavLink 
                      className="nav-link" 
                      activeClassName="nav-link-active"
                      exact
                      to="/">List</NavLink>
                    <NavLink 
                      className="nav-link" 
                      activeClassName="nav-link-active"
                      exact
                      to="/about">About</NavLink>
                    
                </div>
              </header>
            </div>
        </div>
    );
}

export default Title;