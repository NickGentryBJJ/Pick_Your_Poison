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
        const stats = document.querySelector(".fighter");
        stats.innerHTML = "";
        const name = document.createElement("h3");
        const subWins = document.createElement("h4");
        const img = document.createElement("img");
        const link = document.createElement("a");
        const subRate = document.createElement("h5");
        subRate.textContent = "The " + submission.name + " makes up " + submission.subRate + "% of subs in UFC."
        link.href = submission.videoLink;
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
        
        limbClass.submissions.forEach(sub => {
            const li = document.createElement("li");
            li.className = "submissions"
            li.id = sub.name
            li.textContent = sub.name;
            li.style.fontFamily = "DarkSouls";
            li.addEventListener("click", (e) => {

                subList.childNodes.forEach(child => {
                    child.style.backgroundColor = "";
                    child.style.color = ""
                    child.style.fontStyle = ""
                });
                li.style.backgroundColor = "red";
                li.style.color = "black"
                li.style.fontStyle = "italic"
                
                
                displayFighter(sub.fighter, sub);
            });
            subList.append(li);
            
        });
    };
    
    function resetSubList() {
        document.querySelector(".subList").innerHTML = "";
        const stats = document.querySelector(".fighter");
        stats.innerHTML = "";
    };
    
            
    head.addEventListener("click",  (e) => {
        selectLimb(head);
        resetSubList();
        subList(Seeds.chokes);
        console.log("head");
    } )

    
    torso.addEventListener("click",  (e) => {
        selectLimb(torso);
        resetSubList();
        subList(Seeds.spineSubs);
        console.log("spine");
    } )
    
    
    leftShoulder.addEventListener("click",  (e) => {
        selectLimb(leftShoulder);
        resetSubList();
        subList(Seeds.shoulderSubs);
        console.log("left shoulder");
    } )
    
    
    rightShoulder.addEventListener("click",  (e) => {
        selectLimb(rightShoulder);
        resetSubList();
        subList(Seeds.shoulderSubs);
        console.log("right shoulder");
    } )
    
    
    rightArm.addEventListener("click",  (e) => {
        selectLimb(rightArm);
        resetSubList();
        subList(Seeds.armSubs);
        console.log("right arm");
    } )
    
    
    leftArm.addEventListener("click",  (e) => {
        selectLimb(leftArm);
        resetSubList();
        subList(Seeds.armSubs);
        console.log("left arm");
    } )
    
    
    leftHand.addEventListener("click",  (e) => {
        selectLimb(leftHand);
        resetSubList();
        subList(Seeds.wristSubs);
        console.log("left hand");
    } )
    
    
    rightHand.addEventListener("click",  (e) => {
        selectLimb(rightHand);
        resetSubList();
        subList(Seeds.wristSubs);
        console.log("right hand");
    } )
    
    
    rightLeg.addEventListener("click",  (e) => {
        selectLimb(rightLeg);
        resetSubList();
        subList(Seeds.kneeSubs);
        console.log("right leg");
    } )
    
    
    leftLeg.addEventListener("click",  (e) => {
        selectLimb(leftLeg);
        resetSubList();
        subList(Seeds.kneeSubs);
        console.log("left leg");
    } )
    
    
    leftFoot.addEventListener("click",  (e) => {
        selectLimb(leftFoot);
        resetSubList();
        subList(Seeds.ankleSubs);
        console.log("left foot");
    } )

    
    rightFoot.addEventListener("click",  (e) => {
        selectLimb(rightFoot);
        resetSubList();
        subList(Seeds.ankleSubs);
        console.log("right foot");
    } )

})