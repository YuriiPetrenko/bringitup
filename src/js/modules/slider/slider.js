export default class Slider{
    constructor({page="", btns="", next="", prev=""}={}){
        this.page = document.querySelector(page);
        this.btns = document.querySelectorAll(btns);
        this.slides = this.page.children;
        this.slideIndex = 1;
    }



}