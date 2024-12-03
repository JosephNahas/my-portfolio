//-----------------Typed--------------//
let aboutText=document.getElementById("typed-about");
let typedAbout=new Typed("#typed-about",{strings:["game developer","web developer","computer programmer"],typeSpeed:50,backSpeed:50,loop:true});
//-----------------Projects----------//
let detailButtons=document.getElementsByClassName("details-btn");
let projectDescriptions=document.getElementsByClassName("description");
for(const description of projectDescriptions){
    description.style.visibility="hidden"
}
for(const button of detailButtons){
    button.addEventListener("click",function(){
        button.innerHTML=button.innerHTML==="Show Details"?"Hide Details":"Show Details";
        let buttonID=button.id;
        let content;
        switch(buttonID){
            case"game-btn":
            content=document.getElementById("gameDescription");
            content.style.visibility=content.style.visibility==="hidden"?"visible":"hidden";
            break;
            case"blog-btn":
            content=document.getElementById("blogDescription");
            content.style.visibility=content.style.visibility==="hidden"?"visible":"hidden";
            break;
            case"forum-btn":content=document.getElementById("forumDescription");
            content.style.visibility=content.style.visibility==="hidden"?"visible":"hidden";
            break;
            default:
        }
    })
}
//--------------Contact Form----------------//
let contactName=document.getElementById("name");
let contactEmail=document.getElementById("email");
let contactMessage=document.getElementById("message");
let submitButton=document.getElementById("submit-btn");
submitButton.addEventListener("click",function(event){
    event.preventDefault();
    if(contactName.value==="")
        alert("Please enter your name");
    else if(contactEmail.value==="")
        alert("Please enter your email");
    else if(contactMessage.value==="")
        alert("Please enter your message");
    else if(!contactEmail.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        alert("please enter a valid email");
    else{alert("Thank you for your message!");
        contactName.value="";
        contactEmail.value="";
        contactMessage.value=""
    }
});
//---------------Project Filtering--------------//
const filterButtons=document.querySelectorAll(".filter-btn");
const projects=document.querySelectorAll(".projects-box");
filterButtons.forEach(button=>{
    button.addEventListener("click",function(){
        const category=this.getAttribute("data-category");
        projects.forEach(project=>{
            if(project.getAttribute("data-category")===category||category==="all"){
                project.style.display="block"
            }else{
                project.style.display="none"
            }
        })
    })
});
//----------------Skills Chart--------------------//
var xValues = [ "HTML", "CSS", "Javascript", "C++", "C#", "Unreal Engine"];
var yValues = [1, 1, 1, 2, 2, 2];
var barColor = "black";
var chartLabelColor = "black";
const myChart = new Chart("skills-chart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColor,
          data: yValues
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks:{
                    fontColor: chartLabelColor,
                    beginAtZero: true,
                    callback: function(value,index){
                        if (value == 0){
                            return ' '
                        } else if (value == 1){
                            return 'Beginner';
                        } else if (value == 2){
                            return 'Experienced';
                        }
                    }
                }
            }],

            xAxes: [{
                ticks:{
                    fontColor: chartLabelColor
                }
            }]
        },
        legend: {display: false},
        title: {
          display: false,
          text: "Skills"
        }
    }
});
//------------------Dark Mode Toggle------------------------//
let aboutSection=document.getElementById("about");
const toggleThemeButton=document.getElementById("toggleTheme");
toggleThemeButton.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
    aboutSection.classList.toggle("dark-mode");
    myChart.data.datasets[0].backgroundColor = (myChart.data.datasets[0].backgroundColor == 'black') ? 'white' : 'black';
    myChart.options.scales.yAxes[0].ticks.fontColor = (myChart.options.scales.yAxes[0].ticks.fontColor == 'black') ? 'white' : 'black';
    myChart.options.scales.xAxes[0].ticks.fontColor = (myChart.options.scales.xAxes[0].ticks.fontColor == 'black') ? 'white' : 'black';
    myChart.update();
});