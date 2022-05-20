
const stateDropdown = document.getElementById("dropdown-content");
//const a = document.createElement('a');

//-------iterates over every data[i].state to create the dropdown menu-----
function createStateALink (){
    
    fetch(`https://corona.lmao.ninja/v3/covid-19/states`)
.then (res=> res.json())
        .then(data=>{
            for(let x=0; x<data.length; x++){
                const a = document.createElement('a');
                console.log('index ' + x);
                stateDropdown.append(a);
                a.id=x;
                a.innerText=`${data[x].state}`;
                console.log(`state data: ${data[x].state}`);
                
                }
            }
        );
    
}

createStateALink();
