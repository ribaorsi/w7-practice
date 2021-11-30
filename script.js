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
    
const formElement = `
<form id='form'>
${inputElement('text', 'firstName', 'Keresztneved')}
${inputElement('file', 'profilePicture', 'Profilképed')}
${inputElement('email', 'personalEmail', 'Email címed')}
${inputElement('radio', 'newsletter', 'Feliratkozás a hírlevélre')}
${inputElement('checkbox', 'terms', 'Elfogadom a feltételeket')}
<button>OK</button>
</form>
`;

const formSubmit = (event) =>{
    event.preventDefault();
    console.log(event.target);
    event.target.classList.add('Submitted');
} 
const inputUpdate = (event) => {
    document.getElementById('inputValue').innerHTML = event.target.value;
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