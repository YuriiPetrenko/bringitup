export default class Slider{
    constructor({
        container=null, 
        btns=null, 
        next=null, 
        prev=null,
        activeClass='',
        animate,
        autoplay
    }={}){
        this.container = document.querySelector(container);
        this.btns = document.querySelectorAll(btns);
        try {this.slides = this.container.children;}catch(e){console.log(e)}
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay; 
        this.slideIndex = 1;
    }
}