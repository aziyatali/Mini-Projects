import React,{Component} from 'react';
import Post from './post';
import Home from './home'
import Me from "/home/aziyatali/Desktop/Mini-Projects/My Portfolio/src/components/images/me.png"

import '/home/aziyatali/Desktop/Mini-Projects/My Portfolio/src/App.scss';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '/home/aziyatali/Desktop/Mini-Projects/My Portfolio/src/components/footer.js';


export default class Portfolio extends Component{
    render(){
        return (
            <div className="div2">
                
                <div className="blog-header">
                    <div className="cursor-item title2">
                        <h1>
                            Three things that I am unique with
                        </h1>
                    </div>
                </div>

                <div className="blog-body">

                   <div className = "blog-avatar">
                             <img src={Me} alt="Me in BAB" width = "280px" height="470px"></img>
                        </div>
 
                    <div className="cursor-item title">
                        <div className="blog-body-content2">
                            <h1>
                                 Birthday
                            </h1>
                            <div className="blog-body-content2">
                                <h2>- 19.09.1999</h2>
                            </div>
                        </div>
                        
                        <div className="blog-body-content2">
                             <h1>
                                School
                             </h1>
                             <div className="blog-body-content2">
                                <h2>- 16.21.22</h2>
                             </div>
                        </div>
                        
                        <div className="blog-body-content2">
                            <h1>
                                University
                            </h1>
                            <div className="blog-body-content2">
                                 <h2>- 20172018</h2>
                            </div>
                        </div>
                        
                    </div>
                </div>   

            </div>
            


        )
    }
}