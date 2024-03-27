let tl = gsap.timeline()

tl.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5
});



tl.from("#line1-part1 ", {
    opacity: 0,
    onStart: function () {
        var cnt = document.querySelector("#counter")
        counter = 0;
        cnt.textContent = 0
        setInterval(function () {
            if (counter < 100) {
                counter++;
                if (counter <= 9) {
                    cnt.textContent = "0" + counter;
                }
                else {
                    cnt.textContent = counter;
                }
            }
        }, 30)

    }
});

tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})


tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 4
});

tl.from("#page1",{
    delay:0.2,
    opacity:1,
    duration:0.5,
    y:1600
})

tl.to("#loader",{
    display:"none"
})