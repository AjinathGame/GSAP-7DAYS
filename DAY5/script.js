
const tl = gsap.timeline();



tl.from (".para",{
    y: "100",
    duration: 2,
    opacity: 0,
    
    scrollTrigger:{
        trigger: ".page2",
        start: "-30%",
        end: "70% 30%",
        scrub: true,
        
        
    }
})

tl.from (".img",{
    y: "100",
    duration: 2,
    opacity: 0,
    
    scrollTrigger:{
        trigger: ".page2",
        start: "-30%",
        end: "70% 30%",
        scrub: true,
    }
})