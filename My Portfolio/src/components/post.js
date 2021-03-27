import { Component } from 'react';
import { Card, Badge} from 'react-bootstrap';

const proxy = "https://cors-anywhere.herokuapp.com/";
let pfolio = []
let tester = []

class Details extends Component{
    state = {loading: true};
    componentDidMount(){
        fetch(proxy+'https://api.telegra.ph/getPageList?access_token=c0a7505bf761d53fa81d36da5a6ff99e4da885fdbc24b34c6d9bde144d80&limit=12').then(blob => blob.json())
        .then(data=>{
            data.result.pages.map((value)=>(
                tester.push({title:value.title, url: value.url, type:"Telegraph", views: value.views, author: value.author_name})
            ));
            JSON.stringify(tester);
            pfolio = tester;
            tester=[];
            this.setState({loading:false});
            return data;
        }).catch(e=>{
            console.log(e);
            return e;
        });
    }
    
    render(){
        if (this.state.loading){
            return <h3>Loading....</h3>;
        }
        return (
            pfolio.map((value)=>(
                <div>
                    <div className="blog-card">
                    <a rel="noreferrer" target="_blank" href={value.url}>
                        <Card id="blog-card">
                            <Card.Body>
                                <Badge variant="secondary">{value.type}</Badge>
                                <Card.Title><h4>{value.title}</h4></Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Author - {value.author} • <i>{value.views} views</i></small>
                            </Card.Footer>
                        </Card>
                        </a>
                    </div>
                </div> 
            ))
        )
        
    }
}

export default function Post() {
    return([<Details/>]);
}