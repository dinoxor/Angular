console.log('Hello World');
var input = document.querySelector('input[id=cityInput]');



function displayOutput(){
    document.querySelector('p[id=cityOutput]').innerHTML = this.value;
};


input.addEventListener('keyup',displayOutput, false);

console.log(input.textContent);




///////////////////

function foo1()
{
    return {
        bar: "hello"
    };
}

function foo2()
{
    return 
    {
        bar: "hello"
    };
}

console.log(foo1());
console.log(foo1().bar);
console.log(foo2());
console.log(foo2().bar);