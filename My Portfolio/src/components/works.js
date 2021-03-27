import React from 'react';
import { Card, Badge } from 'react-bootstrap';

var pfolio = new Map();
pfolio=[
    {
        "image": "",
        "type":"Full-stack",
        "title":"Website for Achimera",
        "description": "Website to show the table with the list of those who need a help or who can help in the pandemic situation.",
        "url":"https://achimera.team"
    },
    {
        "image": "",
        "type":"Full-stack",
        "title":"Website for Leaf OCS",
        "description": "Introductory website for the Organic Cleaning company in Bellevue, Washington.",
        "url":"https://leafocs.com"
    },
    {
        "image": "",
        "type":"Full-stack",
        "title":'Website for Consulting Company "Ask"',
        "description": "Website where customers are able to contact with company's staff, alongside learn about programs the company offer.",
        "url":"https://ask.kg"
    },
    {
        "image": "",
        "type":"UI/UX",
        "title":'Carpooling application "KETTIK"',
        "description": 'UI and UX design for mobile app "KETTIK", currently deprecated',
        "url":"https://www.figma.com/file/RmhRt1KhbxgPaRFwOhd46RoS/Kettik-1?node-id=0%3A1"
    },
    
]


export default function Works() {
    return (
        pfolio.map((value)=>(
            <div>
                <div className="work">
                    <Card>
                        <Card.Img variant="top" src={value.image} />
                        <Card.Body>
                            <Card.Title><h4>{value.title}</h4></Card.Title>
                            <Badge variant="secondary">{value.type}</Badge>
                            <Card.Text>
                                <h5>
                                {value.description}
                                </h5>
                            </Card.Text>
                            <a rel="noreferrer" target="_blank" href={value.url}><button className="buttn">View site</button></a>
                        </Card.Body>
                    </Card>
                </div>
            </div> 
        ))
    )
}