
let tl = gsap.timeline();

tl.from(".main-img-container",{
    width:300,
    duration:0.7,
    opacity:0,
    rotation:45,
    start:"top center"
})

tl.from(".main-inner-img-container",{
    y:100,
    duration:0.7,
    opacity:0,
    start:"top center"
})

tl.from("nav",{
    y:-50,
    duration:0.7,
    opacity:0,
    start:"top center"
})

gsap.from(".text-container p",{
    y:100,
    opacity:0,
    duration:0.7,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container-2",
        start:"20% 70%",
        end:"80% 50%",
        scrub:true,
    }   
})