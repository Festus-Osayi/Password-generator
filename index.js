const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_+:<>?/,.|-';


let button = document.getElementById("gen-btn");
let gen_button2 = document.getElementById("input2");
let pass_input = document.getElementById("password-input");


function generatePassword1(){
    var result = "";
    let input_length = parseInt(pass_input.value);
    for(let i = 0; i < input_length; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("input1").innerHTML = result;
    return result;  
         
}
button.addEventListener("click", generatePassword1);


function generatePassword2() {
    var result = "";
    let input_length = parseInt(pass_input.value);
    for (let i = 0; i < input_length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("input2").innerHTML = result;
    return result;

}
button.addEventListener("click", generatePassword2);




// function to copied text..

function copied_text(text){
 
    
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    
}