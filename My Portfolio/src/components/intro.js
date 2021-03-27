
import React,{Component} from 'react';
import Typewriter from 'typewriter-effect';

export default class Intro extends Component{
    render(){
        return (
            <div className="box content">
                <span className="main_name" id="main_title">
                    <Typewriter 
                        options={{
                            strings: [  'Hey there!', 
                                        'I am Iskhak - Beginning Web Developer and UI/UX designer',
                                        'You can learn about me more in Profile section', 
                                        'Want to see my works?', 
                                        'Go to Portfolio', 
                                        'Or want to contact me?', 
                                        'Easy. Click on the links below'],
                            autoStart: true,
                            delay: 40,
                            deleteSpeed: 10,
                            loop: true,
                        }}
                    />                  
                </span>
            </div>
        );
    }
}