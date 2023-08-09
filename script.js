const gameBoard= document.querySelector("#gameBoard");
var x = document.getElementById("Congratulation"); 

const digits= document.querySelector("#digits");
const mistake=document.querySelector("#mistake");
 let lastSelect=null; 
 let error=0;

 const deleteNum=document.querySelector("#delete");
const puzzel=[
    "-52--6---",
    "16-9----4",
    "-4-8-362-",
    "4-----8--",
    "-8-2-1-9-",
    "9---38-6-",
    "897-6--41",
    "21--89--6",
    "--612---8",
    
]
const solution =[
    "352476189",
    "168952734",
    "749813625",
    "425697813",
    "683241597",
    "971538462",
    "897365241",
    "214789356",
    "536124978",

];
window.onload=(()=>{
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            const div =document.createElement("div");
            div.classList.add("tile");

            div.addEventListener("click",selectTile);

div.setAttribute("row",i);
div.setAttribute("col",j);



            if(puzzel[i][j]!="-"){

            div.innerText=puzzel[i][j];
        div.classList.add("filled")
    }
    if(i==2||i==5){
        div.classList.add("border-bottom")
    }
    if(j==2||j==5){
        div.classList.add("border-right")
    }
    
    gameBoard.appendChild(div);
    }}
    for(i=1; i<=9; i++){
        const div=document.createElement("div");
        div.classList.add("tile");
        div.addEventListener("click",addNum)
        div.innerText=i;
        digits.appendChild(div);
    }
    

})


function selectTile(){
    if(lastSelect!=null){
        lastSelect.classList.remove("select-tile");
    }
    lastSelect =this;
  lastSelect.classList.add("select-tile")
}
function addNum(){
    if(lastSelect.innerText==""||lastSelect.classList.contains("danger")){
    
        lastSelect.innerText=this.innerText;

    }
    let row =lastSelect.getAttribute("row");
    let col =lastSelect.getAttribute("col");
    if(solution[row][col]==lastSelect.innerText){
        lastSelect.classList.remove("danger")
    }else{
        lastSelect.classList.add("danger")
        errorDisplay();
    }
    // if(error>2){
    //     alert("You lost the Game")
    //     location.reload();
    // }
    if(allFilled()){
        // alert("all filled")
    if(lastSelect.classList.contains("danger"))
        
        alert("U filled Wrong Number");

    else{
        playAudio();
        alert("congo")
    }


    }
    
}
    deleteNum.onclick=()=>{
        if(!lastSelect.classList.contains("filled")){
            
            lastSelect.innerText="";
        }
    }
    
    function errorDisplay(){
        
        error++;
        mistake.innerText=error;
    }
    function allFilled(){
        const allTiles =gameBoard.querySelectorAll(".tile");
        return [...allTiles].every((tile)=>{
            return tile.innerText!=="";
        })
    }

function playAudio() { 
  x.play(); 
} 

function dangerAudio() { 
    x.play(); 
  } 


if(lastSelect.classList.contains("danger")){
    dangerAudio();
}

