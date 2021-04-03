import React from 'react';
import { Card, Badge } from 'react-bootstrap';

var pfolio = new Map();
pfolio= [
    {
        "type":"Data Visualization with D3.js",
        "title":"Bouncing Ball",
        "description": "D3.js, Javascript, CSS",
        "url":"https://github.com/aziyatali/Mini-Projects/tree/main/Bouncing%20Ball%20d3.js"
    },
    {
        "type": "Building Calculator interface with C++",
        "title": "Scientific Calcualtor with advances function for scientists and engineers",
        "description": "Built by using OOP in C++ ",
        "url": "https://github.com/aziyatali/Mini-Projects/tree/main/Scientific%20Calculator"
    },
    {
        "type": "Full Stack app for language exchanging",
        "title": "Learning other languages from native speakers by helping them to learn your language",
        "description": "React, Node.js, Bootstrap, Postgresql",
        "url": "https://github.com/aziyatali/Mini-Projects/tree/main/my-app" 
    },
    {
        
        "type": "Server Client Communication with Python",
        "title": "Server Client Communication",
        "description": "Python",
        "url": "https://github.com/aziyatali/Mini-Projects/tree/main/Server%20Client%20Communication" 
    },
]
console.log("Portfolio in Work", pfolio);

export default function Works() {
    return (
        pfolio.map((value)=>(
            <div>
                <div className="work">
                    <Card>
                        <Card.Body>
                            <Card.Title><h4>{value.title}</h4></Card.Title>
                            <Badge variant="secondary">{value.type}</Badge>
                            <Card.Text>
                                <h5>
                                {value.description}
                                </h5>
                            </Card.Text>
                            <a rel="noreferrer" target="_blank" href={value.url}><button className="buttn">Check the Work</button></a>
                        </Card.Body>
                    </Card>
                </div>
            </div> 
        ))
    )
}