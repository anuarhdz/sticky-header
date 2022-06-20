// async function animate(element, type) {
//   let { default: gsap } = await import('gsap');
//   switch (type) {
//     case 'init': 
//       if(element.id === 'top-header'){
//         gsap.set(element, { autoAlpha: 0, display: 'none', yPercent: -100, onComplete: () => {
//           console.log('hola')
//         } })
//       }
//       break;
//     case 'showTopHeader':
//       gsap.to(element, { autoAlpha:1, yPercent: 0, duration: .5, ease: 'power2.out', display: 'block', delay: .3 });
//       break;
//     case 'hideTopHeader':
//       gsap.to(element, { autoAlpha: 0, yPercent: -100, duration: .3, ease: 'power2.out', display: 'none' });
//       break;
//     case 'hideBottomHeader':
//       gsap.to(element, { autoAlpha:0, yPercent: -100, display: 'none', duration: .2, ease: 'power2.out' });
//       break;
//     case 'showBottomHeader':
//       gsap.to(element, { autoAlpha: 1, yPercent: 0, display: 'block', duration: .1, ease: 'power2.out' });
//       break;
//   }
// }
class StickyHeader extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.header = document.getElementById("main-header");
        this.topHeader = this.header.querySelector("#top-header");
        this.bottomHeader = this.header.querySelector("#bottom-header");
        this.headerBounds = {};
        this.currentScrollTop = 0;
        this.preventReveal = false;
        this.onScrollHandler = this.onScroll.bind(this);
        this.hideHeaderOnScrollUp = ()=>this.preventReveal = true;
        this.addEventListener("preventHeaderReveal", this.hideHeaderOnScrollUp);
        window.addEventListener("scroll", this.onScrollHandler, false);
        this.createObserver();
    }
    disconnectedCallback() {
        window.removeEventListener("scroll", this.onScrollHandler);
        this.removeEventListener("preventHeaderReveal", this.hideHeaderOnScrollUp);
    }
    createObserver() {
        let observer1 = new IntersectionObserver((entries, observer)=>{
            this.headerBounds = entries[0].intersectionRect;
            observer.disconnect();
        });
        observer1.observe(this.header);
    }
    onScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
            if (this.preventHide) return;
            requestAnimationFrame(this.hide.bind(this));
        } else if (scrollTop < this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
            if (!this.preventReveal) requestAnimationFrame(this.reveal.bind(this));
            else {
                window.clearTimeout(this.isScrolling);
                this.isScrolling = setTimeout(()=>{
                    this.preventReveal = false;
                }, 66);
                requestAnimationFrame(this.hide.bind(this));
            }
        } else if (scrollTop <= this.headerBounds.top) requestAnimationFrame(this.reset.bind(this));
        this.currentScrollTop = scrollTop;
    }
    hide() {
        console.log("hide");
        if (this.currentScrollTop > 200) this.header.classList.add("sticky-header");
    }
    reveal() {
        console.log("reveal");
        if (this.currentScrollTop < 100) this.header.classList.remove("sticky-header");
    }
    reset() {
        console.log("reset");
    }
}
customElements.define("sticky-header", StickyHeader);

//# sourceMappingURL=index.3afbf1cd.js.map
