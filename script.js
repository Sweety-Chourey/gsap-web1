var tl = gsap.timeline()

tl.from("#nav h3",{
  y:-50,
  duration:0.5,
  delay:0.2,
  opacity:0
})

tl.from("#nav h4",{
  y:-50,
  opacity:0,
  duration:0.6,
  stagger:0.2
})
tl.from(".part1 img ",{
  x:-1000,
  duration:0.6,
  opacity:0,
  
})

tl.from(".part1 h1 ",{
  x:-1000,
  duration:0.6,
  opacity:0,
  
})
tl.from(".part1 p ",{
  x:-1000,
  duration:0.6,
  
})
tl.from(".part2 img ",{
  x:1000,
  duration:0.6,
  opacity:0,
  
})
tl.from(".round ",{
  x:1000,
  duration:0.6,
  opacity:0,
  
})
tl.from(".box ",{
  x:1000,
  duration:0.1,
  opacity:0,
  
})
tl.from(".star ",{
  // y:-1000,
  // duration:0.6,
  // opacity:0,
  y:1000,
  duration:0.1,
  // repeat:-1,
  // yoyo:true
})
tl.to(".box,.star",{
  y:10,
  duration:3,
  repeat:-1,
  yoyo:true
})
tl.to("img",{
  y:10,
  duration:3,
  repeat:-1,
  yoyo:true
})