document.body.onload = function(){
    document.querySelector("form").classList.add("activeL");
    document.querySelector("div").classList.add("activeR")
}

let text = "";
let textField = document.getElementById("text");
let number = document.getElementById("nbr");
let inputText = document.getElementById("inpText");
let btn = document.getElementById("btn");

let speed = 300 / number.value;

let i=0;

btn.addEventListener("click",(e)=>{
    
    e.preventDefault()
    if(inputText.value == "") return false;
    text = inputText.value;
    inputText.value = "";
    
    if(textField.innerHTML != ""){ // second time it wont call the function write again
        textField.innerHTML = "";
        i=0;
    } else write();
    
    // writeText(text,speed);

})


function write(){
    if(i==text.length){
        textField.innerHTML = "";
        i=0;
    }
    textField.innerHTML += text[i];
    i++;
    setTimeout(write,speed) //chaque "speed"ms call the function write
}

number.addEventListener("change",()=>{
    speed = 300 / number.value; // chaque changement dans le nombre de l'input on va changer le speed
})





// number.addEventListener("change",()=>{
//     console.log(number.value)
//     if(textField.innerHTML != ""){
//         speed = 300 / number.value;
//         // writeText(text,speed);
//         setInterval(()=>{
//             if(i==text.length){
//                 textField.innerHTML = "";
//                 i=0;
//             }
//             textField.innerHTML += text[i];
//             i++;
//         },speed)
//     }
    
// });

// function writeText(text,speed){
//     setInterval(()=>{
//         if(i==text.length){
//             textField.innerHTML = "";
//             i=0;
//         }
//         console.log("before1")
//         textField.innerHTML += text[i];
//         i++;
//     },speed)

// }

