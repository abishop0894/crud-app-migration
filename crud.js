let counter = 0;
const one = document.getElementById('form')
let parent = document.getElementById('span');
let form = document.getElementById('form');

let state = {

    edit: document.createAttribute('src').value = "./edit.png",
    close: document.createAttribute('src').value = "./close.png",
    check: document.createAttribute('src').value = "./check.png",
    btn: document.createElement('button'),
    img: document.createElement('img'),
    //td : document.createElement('td'),
    h3: document.createElement('h3'),
    placeholder: document.createAttribute('placeholder').value = "Enter",
    firstName: one.querySelector('input[name="firstName"]'),
    lastName:  one.querySelector('input[name="lastName"]'),
    email:  one.querySelector('input[name="email"]'),
    city: one.querySelector('input[name="city"]'),
    state: one.querySelector('input[name="state"]'),
    zipCode: one.querySelector('input[name="zipCode"]'),
    tr: document.createElement('tr'),
    
}


const appendChk = async () => {
    //btn initiated with value from state
    let btn = state.btn;
    //td appended to first row 
    btn.innerHTML= '<img style="width:`20px`; height: `20px`" src="./check.png"></img>'
    
    //new btn is appended to td

    //inner html of button is check mark
   
    //btn is given attr type with a value submit
    btn.setAttribute('type', 'submit');
    //btn is given attr form with value form to connect to rest of form
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
    let zip = document.getElementById('zip').value;
    console.log(val);
    let tr = document.createElement('tr');

    let td = document.createElement('td'); 
    tr.setAttribute('style', "display: flex; gap: 5vw !important;")
    let table = document.getElementById('tBody')  
    let edit = document.createElement('button');
    edit.innerHTML ='<img src="./edit.png">'
    td.innerHTML= val + " " + last +  "    " + email + " " + city + "  " + state + "    " + zip;
    td.appendChild(edit);
    tr.appendChild(td);
  

    table.appendChild(tr); 
        
    
    }


   


form.addEventListener('submit', (e) => {
    e.preventDefault();
    add();
     counter++;
   })


//function to post must increment counter 


