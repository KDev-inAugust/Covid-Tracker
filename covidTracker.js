const cardsContainer = document.getElementById("state-cards-container")
const stateDropdown = document.getElementById("dropdown-content");
//const a = document.createElement('a');

//-------iterates over every data[i].state to create the dropdown menu-----
function createStateALink (){
    
    fetch(`https://corona.lmao.ninja/v3/covid-19/states`)
.then (res=> res.json())
        .then(data=>{
            for(let x=0; x<data.length; x++){
                const a = document.createElement('a');
                stateDropdown.append(a);
                a.id=x;
                a.innerText=`${data[x].state}`;
                a.addEventListener('click', ()=>{
                    renderStateCard(data[x].state, data[x].cases, data[x].active, data[x].casesPerOneMillion);
                        console.log(data[x].state)
                });
                }
            }
        );
    
}

createStateALink();

function renderStateCard(state, cases, activeCases, casesPerMillion){
    const div=document.createElement('div');
    const removeButton=document.createElement("BUTTON");
    cardsContainer.append(div);
    div.innerText=(`${state} \n cases:${cases} \n active cases:${activeCases} \ncases per one million:${casesPerMillion}`)
    div.append(removeButton);
    div.className="card";
    removeButton.innerText=('remove this card \n X');
    removeButton.className="button";
    removeButton.addEventListener('click', (e)=>{handleDelete(e)})
    console.log('render attempted');
}

function handleDelete(e){
    e.target.parentNode.remove();
    }

