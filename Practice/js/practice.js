console.log('Hello World');
var input = document.querySelector('input[id=cityInput]');



function displayOutput(){
    document.querySelector('p[id=cityOutput]').innerHTML = this.value;
};


input.addEventListener('keyup',displayOutput, false);

console.log(input.textContent);