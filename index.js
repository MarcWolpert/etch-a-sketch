let etchasketchPoints=[]

function createGrid(size){
    for (let i=0; i<size; i++){
        let row=document.createElement('div');
        //row.style.flexGrow="1";
        for (let j=0; j<size; j++){
            const div=document.createElement('div');
            div.style.height="15px";
            div.style.width="15px";
            //div.style.flexGrow="1";
            div.style.backgroundColor=["black","green","yellow"][Math.floor(Math.random()*3)];
            div.addEventListener('mouseover',(event)=>{
                div.style.backgroundColor="red";
            })
            div.addEventListener('mouseout', (event)=>{
                div.style.backgroundColor="blue";
            })
            row.appendChild(div);
        }
        etchasketchPoints.push(row);
        row=[]
    }

    //container div
    const containerDiv=document.createElement('div');
    containerDiv.id="containerDiv";
    containerDiv.style.display='flex';
    containerDiv.style.flexDirection='row';
    containerDiv.style.justifyContent='center'
    containerDiv.style.alignItems='center';
    for (let i=0; i<etchasketchPoints.length; i++){
        containerDiv.appendChild(etchasketchPoints[i]);
    }
    return containerDiv;
}
const body=document.querySelector('body');
const dimensionButton=document.createElement('button');
dimensionButton.style.height='40px';
dimensionButton.style.width='80px';
dimensionButton.textContent="Change Dimensions";

dimensionButton.addEventListener('click',(event)=>{
    let answer="yes";
    while (typeof answer !== "number"){
        answer=window.prompt('Enter dimension to make square grid (under 100): ');
        answer=Number(answer);
        console.log(typeof answer);
        console.log(answer);
        if ( !isNaN(answer)){
            if (answer>100){
                answer="";
            }
        }
    }
    //find the existing containerDiv if there and delete/replace
    const containerDivExists=document.getElementById('containerDiv');
    if (containerDivExists!==null){
        //remove all children before deletion
        while (containerDivExists.firstChild){
            containerDivExists.removeChild(containerDivExists.firstChild);
        }
        body.removeChild(containerDivExists);
    }
    const returnedContainerDiv=createGrid(answer);
    body.appendChild(returnedContainerDiv);
    etchasketchPoints=[]
})
body.appendChild(dimensionButton);


