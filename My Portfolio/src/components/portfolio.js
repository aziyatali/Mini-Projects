
import React,{Component, useRef, useEffect, useState} from 'react';

import { Card, Badge } from 'react-bootstrap';

import LeftArrow from './images/left-arrow.svg';

import RightArrow from './images/right-arrow.svg';

import CSSRulePlugin from 'gsap/CSSRulePlugin';

import Me from './images/Me.jpg'


import {TimelineLite, Power3, TweenLite} from 'gsap'

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
console.log("Portfolio", pfolio);
export default function Portfolio(){

    // let imageReveal = CSSRulePlugin.getRule('.img-container:after');
    // useEffect(()=>{
    //     tl.to(container, 0, {css: {visibility: "visible"}})
    //     .to(imageReveal, 1.4, {width: "0%", ease: Power2.easeInOut})
    //     .from(image, 1.4, {scale: 1.6, ease: Power2.easeInOut, delay: -1.6})
    // })
    
  let imageList = useRef(null);
  let descList = useRef(null);
  const imageWidth = 530;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false
  });

  useEffect(() => {
    TweenLite.to(descList.children[0], 0, {
      opacity: 1
    });
  }, []);

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut
    });
  };

  //Content transition

  const fadeOut = (index, duration) => {
    TweenLite.to(descList.children[index], duration, {
      opacity: 0
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(descList.children[index], duration, {
      opacity: 1,
      delay: 1
    });
  };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active-slide")) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
      console.log("imageList: ", imageList);
    } else if (imageList.children[1].classList.contains("active-slide")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains("active-slide")) {
      setState({ isActive3: false, isActive4: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    }else if (imageList.children[3].classList.contains("active-slide")) {
      setState({ isActive1: true, isActive4: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active-slide")) {
      setState({ isActive1: false, isActive4: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains("active-slide")) {
      setState({ isActive3: false, isActive2: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains("active-slide")) {
      setState({ isActive2: false, isActive1: true });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }else if (imageList.children[3].classList.contains("active-slide")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };


    return (
        
        <div className="div2">
            <div className="portfolio col-2">
                <div className="proj-image">
                    <ul ref={el => (imageList = el)}>
                        <li className={state.isActive1 ? 'active-slide':''}>
                        </li>
                        <li className={state.isActive2 ? 'active-slide':''}>
                        </li>
                        <li className={state.isActive3 ? 'active-slide':''}>
                        </li>
                        <li className={state.isActive4 ? 'active-slide':''}>
                        </li>
                    </ul>
                </div>
                <div className="row-3 white">
                    <div className="proj-content">
                        <ul ref={el => (descList = el)}>
                            <li>
                                <h2 className="proj-title">{pfolio[0].title}</h2>
                                <p className="proj-description">{pfolio[0].description}</p>
                            </li>
                            <li>
                                <h2 className="proj-title">{pfolio[1].title}</h2>
                                <p className="proj-description">{pfolio[1].description}</p>
                            </li>
                            <li>
                                <h2 className="proj-title">{pfolio[2].title}</h2>
                                <p className="proj-description">{pfolio[2].description}</p>
                            </li>
                            <li>
                                <h2 className="proj-title">{pfolio[3].title}</h2>
                                <p className="proj-description">{pfolio[3].description}</p>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-2">
                        <div onClick={prevSlide} className="arrows left">
                            <span>
                                <img src={LeftArrow} alt='lft arrw'/>
                            </span>
                        </div>
                        <div onClick={nextSlide} className="arrows right">
                            <span>
                                <img src={RightArrow} alt='rght arrw'/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
