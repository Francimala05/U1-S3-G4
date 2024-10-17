
function randomNum (){
return math.floor(math.random()*77)
}

const numeriEstratti=[]
const numeriPossibili =[]

const tombola = document.getElementById("numeri")
//per generare le celle contenenti i numeri 
const createNumber= () =>{
    for(let i=1;i<=76;i++){
        const numCellDiv =document.createElement("div");
       numCellDiv.classList.add("cella")
       numCellDiv.textContent =i;
       numCellDiv.id="cella" +1
        tombola.appendChild(numCellDiv)
    }
const numberCellH3 = document.createElement("h3")

numCellDiv.appendChild(numberCellH3)
tombola.appendChild(numCellDiv)


}

//per i numeri casuali
const btn=document.querySelector("button")
btn.onclick= function(event){
    for(let i=0;i<76;i++){
        randomNum();
    }
}



//gestisce l'onload e quindi è quello che deve essere 
//visualizzato a pagina
window.onload = () => {

    createNumber();


}