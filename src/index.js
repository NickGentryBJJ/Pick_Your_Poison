import * as Seeds from "./seeds"

document.addEventListener("DOMContentLoaded", () => {
    const head = document.getElementById("head");
    const torso = document.getElementById("abs");
    const leftShoulder = document.getElementById("leftShoulder");
    const rightShoulder = document.getElementById("rightShoulder");
    const leftArm = document.getElementById("leftArm");
    const rightArm = document.getElementById("rightArm");
    const leftHand = document.getElementById("leftHand");
    const rightHand = document.getElementById("rightHand");
    const leftLeg = document.getElementById("leftLeg");
    const rightLeg = document.getElementById("rightLeg");
    const leftFoot = document.getElementById("leftFoot");
    const rightFoot = document.getElementById("rightFoot");

    const allLimbs = [
        head, torso, leftShoulder, rightShoulder, leftArm, rightArm, leftHand, 
        rightHand, leftLeg, rightLeg, rightFoot, leftFoot, leftFoot
    ];
    
    function selectLimb(limb) {
        let selected = true
        allLimbs.forEach(lim => {
            if (lim.style.backgroundColor === "red") {
                selected = true; 
                lim.style.backgroundColor = "";
                lim.style.zIndex = ""
            } else {

                selected = false 
            };
        });
            if (selected === true) {
                limb.style.backgroundColor = "";
            } else {
                limb.style.backgroundColor = "red";
                limb.style.zIndex = "15"
            };
    };

    function displayFighter(fighter, submission) {
        const div = document.querySelector(".pickSub");
        div.innerHTML = "";
        const stats = document.querySelector(".fighter");
        stats.innerHTML = "";
        const name = document.createElement("h3");
        const subWins = document.createElement("h4");
        const img = document.createElement("img");
        const link = document.createElement("a");
        const subRate = document.createElement("h5");
        subRate.textContent = "The " + submission.name + " makes up " + submission.subRate + "% of subs in UFC."
        link.href = submission.videoLink;
        link.target = "__blank"
        link.textContent = submission.name + " Video";
        subWins.textContent = fighter.subWins;
        subWins.className = "fighter"
        name.className = "fighter"
        name.textContent = fighter.name + " has the most wins with this submission";
        img.src = fighter.img;
        console.log(fighter.img);
            img.className = "fighter";
            stats.append(subRate);
            stats.append(img);
            stats.append(name);
            stats.append(subWins);
            stats.append(link);
    
    }
    
    
    
    function subList(limbClass) {
        const subList = document.querySelector(".subList");
        const div = document.querySelector(".pickSub");
        const dir = document.createElement("h6");
        dir.className = "pickSub";
        dir.textContent = "Pick A Sub!";
        div.append(dir)
        
        limbClass.submissions.forEach(sub => {
            const li = document.createElement("li");
            li.className = "submissions"
            li.id = sub.name
            li.textContent = sub.name;
            li.style.fontFamily = "DarkSouls";
            li.style.fontSize = "20px"
                                

            li.addEventListener("click", (e) => {
                if (resetSubs(li) === true) {
                    const stats = document.querySelector(".fighter");
                    stats.innerHTML = "";
                    const div = document.querySelector(".pickSub");
                    const dir = document.createElement("h6");
                    dir.className = "pickSub";
                    dir.textContent = "Pick A Sub!";
                    div.append(dir)

                   
                } else {
                    subList.childNodes.forEach(child => {
                        child.style.backgroundColor = "";
                        child.style.color = "";
                    child.style.fontStyle = "";
                });
                li.style.backgroundColor = "red";
                li.style.color = "black";
                li.style.fontStyle = "italic";
                
                
                displayFighter(sub.fighter, sub);
            }
            }
            );
            subList.append(li);
            
        });
    };
    
    function resetSubList() {
        const subs = document.querySelector(".subList")
        subs.innerHTML = "";
        const stats = document.querySelector(".fighter");
        stats.innerHTML = "";
    };

    function resetSubs(sub) {
        if (sub.style.fontStyle === "italic") {
                    sub.style.backgroundColor = "";
                    sub.style.color = "";
                    sub.style.fontStyle = "";
                    const dir = document.querySelector(".pickSub");
                    dir.innerHTML = "";
                    dir.textContent = "Pick A Sub!";
            return true 
        } else {return false}
    }
    

    function resetLimb(limb) {
        if (limb.style.backgroundColor === "red") {
            limb.style.backgroundColor = "";
            limb.style.zIndex = "";
            const subs = document.querySelector(".subList")
            subs.innerHTML = "";
            subs.textContent = "Pick A Limb!"
            const stats = document.querySelector(".fighter");
            stats.innerHTML = "";
            return true 
        } else { return false }
    }

    function resetPick()  {
        const dir = document.querySelector(".pickSub")
        dir.innerHTML = ""
    }    

            
    head.addEventListener("click",  (e) => {
        if (resetLimb(head) === true) {
            resetPick();
        } else {
            resetPick();
            selectLimb(head);
            resetSubList();
            subList(Seeds.chokes);
        }
    } )

    
    torso.addEventListener("click",  (e) => {
        if (resetLimb(torso) === true) {
            resetPick();
        } else {
            resetPick();
            selectLimb(torso);
            resetSubList();
            subList(Seeds.spineSubs);
        }
    } )
    
    
    leftShoulder.addEventListener("click",  (e) => {
        if (resetLimb(leftShoulder) === true) {
            resetPick();
        } else {
            resetPick();
            selectLimb(leftShoulder);
            resetSubList();
            subList(Seeds.shoulderSubs);
        }
    } )
    
    
    rightShoulder.addEventListener("click",  (e) => {
        if (resetLimb(rightShoulder) === true) {
            resetPick();
        } else {
            resetPick();
            selectLimb(rightShoulder);
            resetSubList();
            subList(Seeds.shoulderSubs);
        }
    } )
    
    
    rightArm.addEventListener("click",  (e) => {
        if (resetLimb(rightArm) === true) {
            resetPick();
        } else {
            resetPick();
            selectLimb(rightArm);
            resetSubList();
            subList(Seeds.armSubs);
        }
    } )
    
    
    leftArm.addEventListener("click",  (e) => {
        if (resetLimb(leftArm) === true) {
            resetPick();
        } else {
            resetPick();
            selectLimb(leftArm);
            resetSubList();
            subList(Seeds.armSubs);
        }
    } )
    
    
    leftHand.addEventListener("click",  (e) => {
        if (resetLimb(leftHand) === true) {
            resetPick();
        } else {
            resetPick();
            selectLimb(leftHand);
            resetSubList();
            subList(Seeds.wristSubs);
        }
    } )
    
    
    rightHand.addEventListener("click",  (e) => {
        if (resetLimb(rightHand) === true) {
            resetPick();
        } else {
            resetPick();
            selectLimb(rightHand);
            resetSubList();
            subList(Seeds.wristSubs);
        }
    } )
    
    
    rightLeg.addEventListener("click",  (e) => {
        if (resetLimb(rightLeg) === true) {
            resetPick();
        } else {
            resetPick();
            selectLimb(rightLeg);
            resetSubList();
            subList(Seeds.kneeSubs);
        }
    } )
    
    
    leftLeg.addEventListener("click",  (e) => {
        if (resetLimb(leftLeg) === true) {
            resetPick();
        } else {
            resetPick();
            selectLimb(leftLeg);
            resetSubList();
            subList(Seeds.kneeSubs);
        }
    } )
    
    
    leftFoot.addEventListener("click",  (e) => {
        if (resetLimb(leftFoot) === true) {
            resetPick();
        } else {
            resetPick();
            selectLimb(leftFoot);
            resetSubList();
            subList(Seeds.ankleSubs);
        }
    } )

    
    rightFoot.addEventListener("click",  (e) => {
        if (resetLimb(rightFoot) === true) {
            resetPick();
        } else {
            resetPick();
            selectLimb(rightFoot);
            resetSubList();
            subList(Seeds.ankleSubs);
        }
    } )

})