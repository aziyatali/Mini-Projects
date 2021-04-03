import React,{Component} from 'react';
import Post from './post';
import Home from './home'
export default class Portfolio extends Component{
    render(){
        return (
            <div className="div2">
            <h3 className="p-title">LAST POSTS:</h3>
                <div className="blog">
                    <Post/>
                    <Home/>
                </div>
            </div>
        )
    }
}