
import React,{Component, useRef, useEffect, useState} from 'react';

import { Card, Badge } from 'react-bootstrap';

import LeftArrow from './images/left-arrow.svg';

import RightArrow from './images/right-arrow.svg';

import CSSRulePlugin from 'gsap/CSSRulePlugin';

import Me from './images/Me.jpg'


import {TimelineLite, Power3, TweenLite} from 'gsap'

var pfolio = new Map();
pfolio=[
    {
        "image": "https://picsum.photos/500/400",
        "type":"Full-stack",
        "title":"Website for Leaf OCS",
        "description": "Introductory website for the Organic Cleaning company in Bellevue, Washington.",
        "url":"https://leafocs.com"
    },
    {
        "image": "https://picsum.photos/500/400",
        "type":"Full-stack",
        "title":'Website for Consulting Company "Ask"',
        "description": "Website where customers are able to contact with company's staff, alongside learn about programs the company offer.",
        "url":"https://ask.kg"
    },
    {
        "image": "https://picsum.photos/500/400",
        "type":"UI/UX",
        "title":'Carpooling application "KETTIK"',
        "description": 'UI and UX design for mobile app "KETTIK", currently deprecated',
        "url":"https://www.figma.com/file/RmhRt1KhbxgPaRFwOhd46RoS/Kettik-1?node-id=0%3A1"
    },
    
]

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
    isActive3: false
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
      setState({ isActive1: true, isActive3: false });
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
      setState({ isActive1: false, isActive3: true });
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
      setState({ isActive2: false, isActive1: true });
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
                            <img src={pfolio[0].image} alt="project1"/>
                        </li>
                        <li className={state.isActive2 ? 'active-slide':''}>
                            <img src={pfolio[1].image} alt="project2"/>
                        </li>
                        <li className={state.isActive3 ? 'active-slide':''}>
                            <img src={pfolio[2].image} alt="project3"/>
                        </li>
                    </ul>
                </div>
                <div className="row-3 white">
                    <div className="proj-content">
                        <ul ref={el => (descList = el)}>
                            <li>
                                <h2 className="proj-title">{pfolio[0].title}</h2>
                                <p classname="proj-description">{pfolio[0].description}</p>
                            </li>
                            <li>
                                <h2 className="proj-title">{pfolio[1].title}</h2>
                                <p classname="proj-description">{pfolio[1].description}</p>
                            </li>
                            <li>
                                <h2 className="proj-title">{pfolio[2].title}</h2>
                                <p classname="proj-description">{pfolio[2].description}</p>
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
