
let tl = gsap.timeline();

// tl.to(".box", {duration: 1, x: 300, rotation: 360, scale: 0.5, backgroundColor: "red", borderRadius: "50%", ease: "bounce.out"})
//   .to(".box", {duration: 1, x: 0, rotation: 0, scale: 1, backgroundColor: "blue", borderRadius: "0%", ease: "elastic.out(1, 0.3)"})
//   .to(".box", {duration: 1, y: -200, rotation: 180, scale: 1.5, backgroundColor: "green", borderRadius: "20%", ease: "power1.inOut"})
//   .to(".box", {duration: 1, y: 0, rotation: 0, scale: 1, backgroundColor: "purple", borderRadius: "0%", ease: "power1.inOut"});


tl.from(".box",{
    duration: 0.4,
    y: -100,
    opacity: 0,
    
    stagger: {
    grid: [10,22],
    from: "random",
    amount: 1.5
  },
    ease: "back.out(1.7)",
  repeat: -1,
})