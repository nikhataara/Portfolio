const btnhamberger = document.querySelector("#btnhmb");
const over = document.querySelector("#bg");
const box = document.querySelector("#box");

btnhamberger.addEventListener('click', () => {
    if(btnhamberger.classList.contains('open') && box.classList.contains('box') ){
        box.classList.remove('box');
        box.classList.add('fade-out');
        box.classList.remove('fade-in');
        btnhamberger.classList.remove('open');
        over.classList.remove('overlay');
        over.classList.add('fade-out');
        over.classList.remove('fade-in');
    }
    else{
        btnhamberger.classList.add('open');
        over.classList.add('overlay');
        over.classList.add('fade-in');
        box.classList.add('fade-in');
        box.classList.add('box');
        box.classList.remove('fade-out');
        over.classList.remove('fade-out');
    }
}
);


gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline({
            scrollTrigger:{
                trigger: " #skill",
                start: "top 90%",
                toggleActions: "restart none none reset",
        }});
        timeline
        .from("#skill .title", {
            xPercent:"-120",
            ease:'power3.out',
            opacity: 0
        })
        .from("#skill .skill-bar", { 
            xPercent:"-250",
            ease:'power3.out', 
            stagger:0.15,
        })
        .from("#skill .progress", {
            xPercent:"-100", 
            ease:'power2.out',
            stagger: 0.15,
            opacity: 0
        }, 0.8);
        

        let timeline1 = gsap.timeline({
            scrollTrigger:{
                trigger: " #projects",
                start: "top 90%",
                toggleActions: "restart none none reset",
        }});  
        timeline1
        .from("#projects .title",{
            xPercent:"-100",
            opacity:0
        })
        .from("#projects .project-box",{
            opacity:0,
            stagger: 0.35
        }) ; 


        let timeline2 = gsap.timeline({
            scrollTrigger:{
                trigger: " #certifications",
                start: "top 90%",
                toggleActions: "restart none none reset",
        }});  
        timeline2
        .from("#certifications .title",{
            xPercent:"-100",
            opacity:0
        })
        .from("#certifications .certi-box",{
            opacity:0,
            stagger: 0.35
        }) ; 