


function navbar(){
    var navlia = document.querySelectorAll("nav .navbar .right ul li a");
var navbtn=document.querySelector("nav .navbar .right ul button");
var navbtnimg=document.querySelector("nav .navbar .right ul button .btnimg img")
var navbtnimgspan=document.querySelector("nav .navbar .right ul button .btnimg span");
var navbtntxt=document.querySelector("nav .navbar .right ul button .btntxt");
var menunavbar=document.querySelector(".navbar2");
var menubtn=document.querySelector(".navbar .menu .menubtn");
var closemenubtn=document.querySelector(".navbar .menu .closebtn");
var tl1=gsap.timeline();
var tl2=gsap.timeline();


navlia.forEach(navliaa => {
    navliaa.addEventListener("mouseenter", function() {
        // Prevent re-running the animation if it's already completed
        if (navliaa.classList.contains("animated")) return;

        // Create the animation
        gsap.fromTo(navliaa, 
            {
                y: 100
            }, 
            {
                y: 0,
                duration: 0.5,
                onComplete: function() {
                    // Add a class to mark the element as animated
                    navliaa.classList.add("animated");
                }
            }
        );
    });

    // Optionally, remove the "animated" class on mouseleave if you want the animation to run again
    navliaa.addEventListener("mouseleave", function() {
        navliaa.classList.remove("animated");
    });
});

tl2.to(navbtnimgspan,{
display:"none",

})
tl1.to(navbtnimg,{
    opacity:1,
    rotate:"90deg",
})
tl2.to(navbtntxt,{
    top:"-32px",
    // duration:-1
})
tl1.pause();
tl2.pause();
navbtn.addEventListener("mouseenter",function(){
    tl2.play()
    tl1.play();
  
})
navbtn.addEventListener("mouseleave",function(){
    tl1.reverse();
    tl2.reverse();
})


menubtn.addEventListener("click",function(){
    menubtn.style.display="none";
    closemenubtn.style.display="block"
  
    menunavbar.style.display="flex";    
    
})
closemenubtn.addEventListener("click",function(){
    menunavbar.style.display="none";  
    menubtn.style.display="block";
    closemenubtn.style.display="none";
    
      
})



}
navbar();

function video(){
    gsap.registerPlugin(ScrollTrigger);
gsap.to(".section2 .video video",{
    width:"100%",
      duration:1.5,
      scrollTrigger:{
          trigger:".section2 .video video",
          scroller:"body",
          scrub:true,
          start:"top 65%",
        //   markers:true
         
          
      }
  })

}
video();



gsap.to(".section4, .section5 ", {
    color:"black",
    backgroundColor: "white",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".section4, .section5",
        scroller: "body",
        start: "top 30%",
        end: "bottom top",
        onEnter: () =>{
            gsap.to(".section4, .section5", { backgroundColor: "white", duration: 0.5 });
            gsap.to("#hero .section4 .cont .box1 .right ul li a", { color: "black", duration: 0.5 });
            gsap.to("#hero .section4 .cont", { color: "black", duration: 0.5 });
                     
    } ,
        onLeaveBack: () => {
            gsap.to(".section4, .section5", { backgroundColor: "initial", duration: 0.5 });
            gsap.to("#hero .section4 .cont .box1 .right ul li a", { color: "initial", duration: 0.5 });
            gsap.to("#hero .section4 .cont", { color: "white", duration: 0.5 });
    }
        // markers: true
    }
});




var workbtn1=document.querySelector("#hero .section3 .cont .workbtn button .btn1");
var workbtn2=document.querySelector("#hero .section3 .cont .workbtn button .btn2");
var workbg=document.querySelector("#hero .section3 .cont .workbtn button .bg");
var displayworklist1=document.querySelector("#hero .section3 .cont .lists .list1 ul");
var displayworklist2=document.querySelector("#hero .section3 .cont .lists .list1 .ul2");
var listimg=document.querySelectorAll("#hero .section3 .cont .lists .list1 ul li");
var listarrow=document.querySelectorAll("#hero .section3 .cont .lists .list1 ul li div");
var tl3=gsap.timeline();

workbtn1.addEventListener("click",function(){
    gsap.to(workbg,{
        left: 3,
        duration:0.5
    })
    workbtn2.style.color="white";
    workbtn1.style.color="black"
    displayworklist1.style.display="block";
    displayworklist2.style.display="none";
})
workbtn2.addEventListener("click",function(){
    gsap.to(workbg,{
        left: "54%",
        duration:0.5
    })
    workbtn1.style.color="white";
    workbtn2.style.color="black";
    displayworklist1.style.display="none";
    displayworklist2.style.display="block";
})
tl3.
listimg.forEach(liimg=>{
 liimg.addEventListener("mousemove",function(){
   listarrow.forEach(liarrow=>{
    
   })
 })
})


