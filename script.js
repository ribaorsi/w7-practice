/*
function functionName(parameter) {
    functionName("Argument as a string");  ezt el tudjuk érni 
    parameter === "Argument as a string"
}

const functionName = function() {
    functionName();    ezt nem lehet elérni azelőtt mielőtt létrehoztuk a változót
}

const argument = "Argument saved in a variable";
const functionName = function(parameter) {
    parameter === "Argument saved in a variable";
}

functionName (argument);

const functionName = (parameter1, parameter2) => {
    parameter1 === 1;
    parameter2 === 2;
}

const functionName = function () => {
    functionName();  ugyanúgy hívjuk meg a függvényt, akárhogy adtuk meg
}
*/

const inputElement = (type, name, title, req = '') => {
    return `
    <div class='${type}''> 
        <label>${title}</label>
        <input type='${type}' name='${name}' ${req}> 
    </div>
`;
}

const selectElement = (type, name, title, options) => {
    
    let optionsToSelect = "";

    for (const o of options) {
        optionsToSelect += `
        <option>
            ${o}
        </option>
        `;
    }
    
    return `
    <div> 
        <label>${title}</label>
        <${type} name='${name}'> 
            ${optionsToSelect}
        </${type}>
    </div>
`;
}

const nameData = {
    type = 'text',
    name = 'firstName',
    label = 'Keresztneved'

}

anotherFormFields = [
    {
        type: 'text',
        name: 'street',
        label: 'Közterület neve'
    },
    {
        type: 'text',
        name: 'street',
        label: 'Közterólet neve'   
    },
    {   type: 'number',
        name: 'houseNumber',
        label: 'Házszám'
    },
    {
        type: 'text',
        name: 'street',
        label: 'Közterólet neve'  
    }
  
]

const formFields = [{
    type = 'text',
    name = 'firstName',
    label = 'Keresztneved'
    },
    {
        type = 'email',
        name = 'personalEmail',
        label = 'Email címed'
    },
    {  type = 'file',
        name = 'profilePicture',
        label = 'Profilképed'
    },
    {  type = 'checkbox',
        name = 'newsletter',
        label = 'Feliratkozás a hírlevélre'
    },
    {  type = 'filecheckbox',
        name = 'terms',
        label = 'Elfogadom a feltételeket'
    }
    
]
    
/*const formElement = `
<form id='form'>
${inputElement(nameData.type, nameData.name, nameData.label)}
${inputElement('file', 'profilePicture', 'Profilképed')}
${inputElement('email', 'personalEmail', 'Email címed')}
${inputElement('checkbox', 'newsletter', 'Feliratkozás a hírlevélre')}
${inputElement('checkbox', 'terms', 'Elfogadom a feltételeket')}
${selectElement('select', 'where', 'Hol hallottál rólunk?', ['Interneten', 'Ismerőstől', 'Egyéb'])}
<button>OK</button>
</form>
`;
*/

const processCountries = async() => {
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    console.log(countryArr[0].name.official);
    /*üres tömb9t definiálni, for of ciklussal bejárni a countryArry-t
    [i].name.official =< PUSH
    return
    */
   let countries = [];
   for (const c of countryArr) {
       countries.push(c.name.official);
   }
   return countries;
}
processCountries();

const selectFields = {
    type:'select',
    name:'where',
    label:'Hol hallottál rólunk?',
        options:[
            'interneten',
            'ismerőstől',
            'egyéb'
        ]
}

const anotherSelectFields = {
    type:'select',
    name:'countries',
    label:'Ország',
        options:[
            'Italy',
            'Nepal',
            'egyéb'
        ]
}

const formElement = (ffs,id,sel) => {
    let inputs = '';
    for (const ff of ffs) {
        inputs += inputElement(ff.type, ff.name, ff.label, ff.req)
    };    
    return `
    <form id='form'>
        ${inputs}
        ${selectElement(sel.type, sel.name, sel.label, sel.options)}
        <button>OK</button>
    </form>
    `;
}

const formSubmit = (event) =>{
    event.preventDefault();
    const et = event.target;
    console.log(et);
    et.classList.add('Submitted');
    let selectValue = et.querySelector(`select[name="where"]`).value;
    console.log(selectValue);
} 
const inputUpdate = (event) => {
    document.getElementById('inputValue').innerHTML = event.target.value;

    console.log(event.target.closest("form"));
}
function loadEvent() {
    const root = document.getElementById('root');
    root.insertAdjacentHTML('afterbegin', formElement(formFields, 'form', selectFields));
    root.insertAdjacentHTML('afterbegin', formElement(anotherFormFields, 'form2', anotherSelectFields))
    root.insertAdjacentElement('afterbegin', `)
        <div id='inputValue'></div>
        `);

    const form = document.getElementById('form');
    form.addEventListener('submit', formSubmit);

    const inputList = form.querySelectorAll('input');

    for (const input of inputList) {
        input.addEventListener('input', inputUpdate)
    }
}

window.addEventListener('load', loadEvent);