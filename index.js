const ContainerClass = document.getElementsByClassName("etchasektch")[0]; //select first [0]
let UserInputGrid = 20;
let NumberofSquares = (UserInputGrid**2);
const MaxSize = 100;
console.log()
function createDivs() {
    console.log(NumberofSquares)
    ContainerClass.textContent = '';
    for (let i = 0; i<NumberofSquares; i++){
        let OpacitySquare = 0;
        const element = document.querySelector('.element')
        const div = document.createElement("div");
        div.addEventListener('mouseenter', () => {
        OpacitySquare += 0.1;
        div.style.color = "black";
        div.style.background = "black";
        div.style.opacity = (OpacitySquare); 
        
        
        });
        /* div.addEventListener('mouseleave', () => {
            div.style.background = "white";    
        }); */
        div.style.width = "10px";
        div.style.height = "10px";
        div.style.background = "white";
        div.style.color = "white";
        div.style.opacity = 0.0;
        /* div.innerHTML = i;*/
        ContainerClass.appendChild(div);
        console.log("helps")
    }
}
function AlignDivsInCss(){
    ContainerClass.style.setProperty('--grid-rows', UserInputGrid);
    ContainerClass.style.setProperty('--grid-cols', UserInputGrid);
}
function ChangeGridSize(){
    let GridSizeInput = prompt(`Enter Grid size, values larger than ${MaxSize} may cause performance issues.`)
    if (GridSizeInput <= MaxSize){
        UserInputGrid = GridSizeInput;
        NumberofSquares = (UserInputGrid**2);
        ContainerClass.replaceChildren();
        createDivs();
        AlignDivsInCss();
    }
    else{
        window.alert(`Value must be less than ${MaxSize}`);
        ChangeGridSize()
    }
}   
createDivs();
AlignDivsInCss();







