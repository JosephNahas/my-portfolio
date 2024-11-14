let detailButtons = document.getElementsByClassName('details-btn'); 
let projectDescriptions = document.getElementsByClassName('description');

for (const description of projectDescriptions){
    description.style.visibility = 'hidden';
}

for (const button of detailButtons){
    button.addEventListener("click", function(){
        button.innerHTML = (button.innerHTML === "Show Details") ? "Hide Details" : "Show Details";
        let buttonID = button.id;
        let content;
        switch (buttonID){
            case "game-btn":
                content = document.getElementById("gameDescription");
                content.style.visibility = (content.style.visibility === 'hidden') ? 'visible' : 'hidden';
                break;
            case "blog-btn":
                content = document.getElementById("blogDescription");
                content.style.visibility = (content.style.visibility === 'hidden') ? 'visible' : 'hidden';
                break;
            case "forum-btn":
                content = document.getElementById("forumDescription");
                content.style.visibility = (content.style.visibility === 'hidden') ? 'visible' : 'hidden';
                break;
            default:
        }
    });
} 