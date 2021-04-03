import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';


export default function Header(){
   
    return (
            
        <div className="div1 ">
            <div className="cursor-item-link header">
            <hr className="vertical-line"></hr>
            <ul>
                <li id="i-profile">
                <NavLink className="link" activeClassName="active" exact to="/">main</NavLink>
                </li>
                <li
                id="i-portfolio"
                >
                <NavLink className="link" activeClassName="active"  exact to="/works">works</NavLink>
                </li>
                <li
                id="i-blog"
                
                >
                <NavLink className="link" activeClassName="active"  exact to="/blog">blog</NavLink>
                </li>
                <li
                id="i-home"
                
                >
                <NavLink className="link" activeClassName="active"  exact to="/cv">cv</NavLink>
                </li>
            </ul>
            
            </div>
        </div>

        );
}