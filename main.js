let allSection = document.querySelectorAll(".wrapper > section");
let activeSection = 1;

function upperMovement(active, next) {
    active.style.transform = "translate3d(0, -100%, 0)";
    next.style.transform = "translate3d(0, 0, 0)";
}

function lowerMovement(prev, active) {
    prev.style.transform = "translate3d(0, 0, 0)";
    active.style.transform = "translate3d(0, 50%, 0)";
}

function sectionTeleportation(prev,active,next) {
    prev.style.transform = "translate3d(0, -100%, 0)";
    active.style.transform = "translate3d(0, 0, 0)";
    next.style.transform = "translate3d(0, 50%, 0)";
}

let time = new Date().getTime();
let funcTime = 650;

window.addEventListener("wheel", function (e) {
    setTimeout(function () {
        let actualTime = new Date().getTime();
        if ((actualTime - time) >= funcTime) {
            if (e.deltaY > 0) {
                upperMovement(allSection[activeSection], allSection[(activeSection + 1)])
                activeSection++;
            } else {
                lowerMovement(allSection[(activeSection - 1)], allSection[activeSection])
                activeSection--;
                if (activeSection === 0) {
                    setTimeout(function (){
                        activeSection = allSection.length -2;
                        alert(allSection[(activeSection - 1)]+ " " + allSection[activeSection] + " " + allSection[(activeSection + 1)]);
                        sectionTeleportation(allSection[(activeSection - 1)],allSection[activeSection],allSection[(activeSection + 1)]);
                    },500);
                }
            }
            time = new Date().getTime();
        }
    }, 200);
});

