const cardsContainer = document.getElementById("state-cards-container")
const stateDropdown = document.getElementById("dropdown-content");
const averageActiveOutput = document.getElementById("averageActiveOutput");
const averagePerMillionOutput = document.getElementById("averagePerMillionOutput");
let avg;
let avg2;

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
//----------this is the funtion that is called inside "createStateLink" to create the card and populate it with info
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


/* -----------the following code and accompanying function will average active cases for displayed cards-------
make a for loop where x is the document.getElementsByClassName('card')[x], 
it grabs all the active cases, pushes them to an array and then averages them */


function averageDisplayedCards(){
    const activeArray=[];
    SelectedCardArray=document.getElementsByClassName('card');
    for (x=0; x<SelectedCardArray.length; x++){
        activeArray.push(parseInt(SelectedCardArray[x].innerText.split(':')[2]));
    }
    function averageActive(){
        let sum=activeArray.reduce(
        (acc, elem)=>acc+elem,0
        );
        avg = sum/activeArray.length;
        console.log('active array: ' + activeArray + ' sum: ' + sum);
        console.log('avg active cases: ' + avg);
    
        
        }
    averageActive();
}
//------------the following function averages the cases per million and displayes them------
function averagePerMillionDisplayed(){
    const activeArray=[];
    SelectedCardArray=document.getElementsByClassName('card');
    for (x=0; x<SelectedCardArray.length; x++){
        activeArray.push(parseInt(SelectedCardArray[x].innerText.split(':')[3]));
    }
    function averageActive(){
        let sum=activeArray.reduce(
        (acc, elem)=>acc+elem,0
        );
        avg2 = sum/activeArray.length;
        console.log('active per million array: ' + activeArray + ' sum: ' + sum);
        console.log('avg permillion cases: ' + avg2);
        }
    averageActive();
}
//----------code a button to display the average for displayed cards---------

function displayAverageActive(){
    const averageActiveButton=document.getElementById('averageActive');
    averageActiveButton.addEventListener('click', (e)=>{
        averageDisplayedCards(); averagePerMillionDisplayed();
        averageActiveOutput.innerText=`Average active cases for displayed states: ${avg.toFixed(2)}`;
        averagePerMillionOutput.innerText=`Average cases per million for displayed states ${avg2.toFixed(2)}`;
        }
        )
}

displayAverageActive();

//-----------------------fill table data---------------
//creates html elements and fills them with the table information

function tableDataUs(){
    let table = document.getElementById('table');
    fetch(`https://corona.lmao.ninja/v3/covid-19/states`)
        .then (res=> res.json())
        .then(data=>{
            for(let x=0; x<data.length; x++){
                let tr1=document.createElement('tr');
                let td1=document.createElement('td');
                let td2=document.createElement('td');
                let td3=document.createElement('td');
                let td4=document.createElement('td');

                table.append(tr1);
                tr1.append(td1);
                td1.innerText=data[x].state;
                tr1.append(td2);
                td2.innerText=data[x].cases;
                tr1.append(td3);
                td3.innerText=data[x].active;
                tr1.append(td4);
                td4.innerText=data[x].casesPerOneMillion;
            }
        })

}

tableDataUs();

