const myForm  = document.getElementById ("myForm"); 

myForm.addEventListener ("submit", (e) => {
    e.preventDefault();

console.log("Form has been submitted!");
});