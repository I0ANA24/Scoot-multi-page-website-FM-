let itemsList = document.querySelectorAll(".item");
itemsList = Array.from(itemsList);

console.log(itemsList);

itemsList.forEach((item) => {
    item.addEventListener('click', (event) => {
        let answer = item.children[2];
        if (answer.style.display === "block") {
            let chevron = item.children[0];
            setTimeout(() => {
                answer.style.display = "none";
            }, 300);
            chevron.style.transform = "rotate(0deg)";
        } else {
            let chevron = item.children[0];
            setTimeout(() => {
                answer.style.display = "block";
                item.style.backgroundColor = "#FFF4DF";
                answer.style.backgroundColor = "#FFF4DF";
            }, 300);
            chevron.style.transform = "rotate(180deg)";
        }
        console.log(answer);
    });

    item.addEventListener('mouseover', (event) => {
        item.style.backgroundColor = "#FFF4DF";
    });

    item.addEventListener('mouseout', (event) => {
        let answer = item.children[2];
        if(answer.style.display === "block") {
            item.style.backgroundColor = "#FFF4DF";    
        } else
            item.style.backgroundColor = "#F2F5F9";
    });
});