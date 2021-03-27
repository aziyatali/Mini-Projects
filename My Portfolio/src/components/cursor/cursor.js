import {gsap} from 'gsap';
import {lerp, getMousePos, getSiblings} from './utils';

let mouse={x:0, y:0};
window.addEventListener("mousemove", (ev)=> (mouse=getMousePos(ev)));

export default class Cursor{
    constructor(el){
        this.Cursor = el;
        this.Cursor.style.opacity = 0;
        this.Item = document.querySelectorAll(".cursor-item");
        //this.Page = document.querySelector(".content-area");
        this.ItemLink = document.querySelectorAll('.cursor-item-link');
        // this.bounds = this.Cursor.getBoundingClientRect();
        this.cursorConfigs = {
            x: {previous: 0, current: 0, amt: 0.3},
            y: {previous: 0, current: 0, amt: 0.3},
        };
        this.onMouseMoveEv = () => {

            this.cursorConfigs.x.previous = this.cursorConfigs.x.current = mouse.x;
            this.cursorConfigs.y.previous = this.cursorConfigs.y.current = mouse.y;

            gsap.to(this.Cursor, {
                duration:1,
                ease: "Power3.easeOut",
                opacity: 1
            });

            this.onScaleMouse();

            requestAnimationFrame(() => this.render());

            window.removeEventListener('mousemove', this.onMouseMoveEv);
        }

        window.addEventListener("mousemove", this.onMouseMoveEv);
    }


    onScaleMouse(){
        this.Item.forEach((link) => {
            link.addEventListener("mouseenter", () => {
                this.Cursor.classList.add("media-blend");
                this.scaleAnimation(this.Cursor.children[0], 1);
            });

            link.addEventListener("mouseleave", ()=>{
                this.Cursor.classList.remove("media-blend");
                this.scaleAnimation(this.Cursor.children[0], 0.0);
            })
        })
        

        this.ItemLink.forEach((link) => {
            link.addEventListener("mouseenter", () => {
                this.Cursor.classList.add("media-blend");
                this.scaleAnimation(this.Cursor.children[0], 0.8);
            });

            link.addEventListener("mouseleave", ()=>{
                this.Cursor.classList.remove("media-blend");
                this.scaleAnimation(this.Cursor.children[0], 0.0);
            })
        })
    }

    scaleAnimation(el, amt){
        gsap.to( el, {
            duration: 0.6,
            scale: amt,
            ease: "Power3.easeOut",
        })
    }

    render(){
        this.cursorConfigs.x.current = mouse.x;
        this.cursorConfigs.y.current = mouse.y;

        for (const key in this.cursorConfigs){
            this.cursorConfigs[key].previous = lerp(
                this.cursorConfigs[key].previous,
                this.cursorConfigs[key].current,
                this.cursorConfigs[key].amt
            );
        }
        this.Cursor.style.transform = `translateX(${this.cursorConfigs.x.previous}px) 
                                       translateY(${this.cursorConfigs.y.previous}px)`;

        requestAnimationFrame(() => this.render());
    }
}
