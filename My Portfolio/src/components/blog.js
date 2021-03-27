import React,{Component} from 'react';
import Post from './post';
export default class Portfolio extends Component{
    render(){
        return (
            <div className="box">
            <h3 className="p-title">LAST POSTS:</h3>
                <div className="blog">
                    <Post/>
                </div>
            </div>
        )
    }
}