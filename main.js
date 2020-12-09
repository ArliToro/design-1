let allSection = document.querySelectorAll(".text > section");
let activeSection = 0;


const inAction = (fun, delay) => {
    let lastCall = 0;
    return () => {
        let now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return fun();
    }
}

let textDesign = document.querySelector(".text");

textDesign.addEventListener("scroll", inAction((e) => {
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].style.transform = "translate3d(0,-100%,0)";
    }
}, 2000));

// window.addEventListener("touchmove", inAction((e) => {
//     console.log(e);
// }, 2000));
