let allSection = document.querySelectorAll(".text > section");
let activeSection = 0;

let time = new Date().getTime();
let funcTime = 600;

window.addEventListener("wheel", function (e) {
    setTimeout(function () {
        let actualTime = new Date().getTime();
        if ((actualTime - time) < funcTime) {
            return;
        } else {
            if (e.deltaY > 0) {
                if (activeSection < (allSection.length - 1)) {
                    activeSection++;
                    console.log("ti bere scroll posht " + activeSection);
                    for (let i = 0; i < allSection.length; i++) {
                        allSection[i].style.transform = "translate3d(0,-" + (activeSection * 100) + "%,0)";
                    }
                }
            } else {
                if (activeSection > 0) {
                    console.log("ti bere scroll lart " + activeSection);
                    for (let i = 0; i < allSection.length; i++) {
                        allSection[i].style.transform = "translate3d(0,-" + (activeSection * 100 - 100) + "%,0)";
                    }
                    activeSection--;
                }
            }
            time = new Date().getTime();
        }
    }, 200);
});

// window.addEventListener("touchmove", inAction((e) => {
//     console.log(e);
// }, 2000));
