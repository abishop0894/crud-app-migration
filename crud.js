let counter = 0;
const one = document.getElementById('form')
let parent = document.getElementById('span');
let form = document.getElementById('form');
let edit;
let state = {
    btn: document.createElement('button'), 
}


let store = [];

const appendChk = async () => {
    let btn = state.btn;
    btn.innerHTML= '<img style="width:35px; height: 35px;" src="./check.png"></img>'
    btn.setAttribute('type', 'submit');
    btn.setAttribute('form', 'form')
    one.appendChild(btn)
}
 //
    const add = () => {
    let val = document.getElementById('inp').value;
    let last = document.getElementById('last').value;
    let email = document.getElementById('email').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zip = (!Number(document.getElementById('zip').value)) ? "NaN": document.getElementById('zip').value
    console.log(val);
    let tr = document.createElement('tr');

    let td = document.createElement('td'); 
    
    let table = document.getElementById('tBody')  
edit = document.createElement('button');
    let del = document.createElement('button');

    del.innerHTML = `<img style="width:35px; height: 35px;" id="del${counter}" src="./close.png"/>`
    edit.innerHTML =`<img style="width:35px; height: 35px;"  id="edit${counter}" src="./edit.png"/>`
    td.innerHTML= val + " " + last +  "  " + email + " " + city + "  " + state + "    " + zip;
    td.style.wordSpacing = "4vw";  
    store.push(td);
    store.push(`edit${counter}`);
    td.appendChild(edit);
    td.appendChild(del);
    tr.appendChild(td);
    table.appendChild(tr); 
        
    
    
}


   


form.addEventListener('submit', (e) => {
    e.preventDefault();
    add();
     counter++;
   })

   //edit fn
document.addEventListener('click', (e)=> {
    //exit condition
    if (!(store.includes(e.target.getAttribute('id')))) {
        console.log('not a button')
        return;
    }
e.preventDefault();
let attr = e.target.getAttribute('id');
let edit = document.getElementById(attr);

})   


   function update () {

   }

//function to post must increment counter 


