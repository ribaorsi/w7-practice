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

const inputElement = (type, name, title) => {
    return `
    <div> 
        <label>${title}</label>
        <input type='${type}' name='${name}'> 
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
    
const formElement = `
<form id='form'>
${inputElement('text', 'firstName', 'Keresztneved')}
${inputElement('file', 'profilePicture', 'Profilképed')}
${inputElement('email', 'personalEmail', 'Email címed')}
${inputElement('checkbox', 'newsletter', 'Feliratkozás a hírlevélre')}
${inputElement('checkbox', 'terms', 'Elfogadom a feltételeket')}
${selectElement('select', 'where', 'Hol hallottál rólunk?', ['Interneten', 'Ismerőstől', 'Egyéb'])}
<button>OK</button>
</form>
`;

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
    root.insertAdjacentHTML('afterbegin', formElement);
    root.insertAdjacentHTML('afterbegin', `
        <div id='inputValue'></div>
        `);

    const form = document.getElementById('form');
    form.addEventListener('submit', formSubmit);

    const inputList = form.querySelectorAll('input');

    for (const input of inputList) {
        input.addEventListener('input', inputUpdate)
    }
}

window.addEventListener(`load`, loadEvent);