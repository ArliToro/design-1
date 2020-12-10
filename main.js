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

function sectionTeleportation(prev, active, next) {
    prev.style.transform = "translate3d(0, -100%, 0)";
    active.style.transform = "translate3d(0, 0, 0)";
    next.style.transform = "translate3d(0, 50%, 0)";
}

function spanAfterMovement(prevChildren, nextChildren) {
    for (let i = 0; i < allSection.length; i++) {
        let allSpanChildren = allSection[i].querySelectorAll("span");
        for (let all = 0; all < allSpanChildren.length; all++) {
            allSpanChildren[all].style.transform = "translate3d(0, 0, 0)";
            allSpanChildren[all].style.opacity = "1";
        }
    }
    let nextSpanChildren = nextChildren.querySelectorAll("span");
    for (let k = 0; k < nextSpanChildren.length; k++) {
        nextSpanChildren[k].style.transitionDelay = (0.1 * k) + "s";
        nextSpanChildren[k].style.opacity = "0";
        nextSpanChildren[k].style.transform = "translate3d(0,60px,0)";
    }
    let prevSpanChildren = prevChildren.querySelectorAll("span");
    for (let l = 0; l < prevSpanChildren.length; l++) {
        prevSpanChildren[l].style.transitionDelay = 0.1 * l + "s";
        prevSpanChildren[l].style.opacity = "0";
        prevSpanChildren[l].style.transform = "translate3d(0,-60px,0)";
    }
}

function spanUpperMovement(nextChildren) {
    let nextSpanChildren = nextChildren.querySelectorAll("span");
    for (let j = 0; j < nextSpanChildren.length; j++) {
        nextSpanChildren[j].style.transform = "translate3d(0,0,0)";
        nextSpanChildren[j].style.opacity = "1";
    }
}

window.addEventListener("load", function () {
    spanAfterMovement(allSection[(activeSection - 1)], allSection[(activeSection + 1)])
})

let time = new Date().getTime();
let funcTime = 1800;

window.addEventListener("wheel", function (e) {
    setTimeout(function () {
        let actualTime = new Date().getTime();
        if ((actualTime - time) >= funcTime) {
            if (e.deltaY > 0) {
                upperMovement(allSection[activeSection], allSection[(activeSection + 1)]);
                activeSection++;
                setTimeout(function () {
                    spanUpperMovement(allSection[activeSection]);
                }, 550)
                setTimeout(function () {
                    spanAfterMovement(allSection[(activeSection - 1)], allSection[(activeSection + 1)])
                }, 550)
                if (activeSection === (allSection.length - 1)) {
                    setTimeout(function () {
                        activeSection = 1;
                        sectionTeleportation(allSection[(activeSection - 1)], allSection[activeSection], allSection[(activeSection + 1)]);
                        for (let i = 0; i < allSection.length; i++) {
                            allSection[i].style.transitionDuration = "0s";
                        }
                        for (let i = 0; i < allSection.length; i++) {
                            if (i > activeSection) {
                                allSection[i].style.transform = "translate3d(0, 50%, 0)";
                            }
                        }
                        setTimeout(function () {
                            for (let i = 0; i < allSection.length; i++) {
                                allSection[i].style.transitionDuration = ".55s";
                            }
                        }, 20);
                        spanAfterMovement(allSection[(activeSection - 1)], allSection[(activeSection + 1)])

                    }, 1650);
                }
            } else {
                lowerMovement(allSection[(activeSection - 1)], allSection[activeSection])
                activeSection--;
                setTimeout(function () {
                    spanUpperMovement(allSection[activeSection]);
                }, 550)
                setTimeout(function () {
                    spanAfterMovement(allSection[(activeSection - 1)], allSection[(activeSection + 1)])
                }, 550)
                if (activeSection === 0) {
                    setTimeout(function () {
                        activeSection = allSection.length - 2;
                        sectionTeleportation(allSection[(activeSection - 1)], allSection[activeSection], allSection[(activeSection + 1)]);
                        for (let i = 0; i < allSection.length; i++) {
                            allSection[i].style.transitionDuration = "0s";
                        }
                        for (let i = 0; i < allSection.length; i++) {
                            if (i < activeSection) {
                                allSection[i].style.transform = "translate3d(0, -100%, 0)";
                            }
                        }
                        setTimeout(function () {
                            for (let i = 0; i < allSection.length; i++) {
                                allSection[i].style.transitionDuration = ".55s";
                            }
                        }, 20)
                        spanAfterMovement(allSection[(activeSection - 1)], allSection[(activeSection + 1)])
                    }, 1650);
                }
            }
            time = new Date().getTime();
        }
    }, 220);
});

