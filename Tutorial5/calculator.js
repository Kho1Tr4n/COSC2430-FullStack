function add(){
    let n1 = document.querySelector("#number1");
    let n1_number = n1.value;
    let n2 = document.querySelector("#number2");
    let n2_number = n2.value;
    let result = document.querySelector("#result");
    result.value = Number(n1_number) + Number(n2_number);
}

function subtract(){
    let n1 = document.querySelector("#number1");
    let n1_number = n1.value;
    let n2 = document.querySelector("#number2");
    let n2_number = n2.value;
    let result = document.querySelector("#result");
    result.value = Number(n1_number) - Number(n2_number);
}

function multiply(){
    let n1 = document.querySelector("#number1");
    let n1_number = n1.value;
    let n2 = document.querySelector("#number2");
    let n2_number = n2.value;
    let result = document.querySelector("#result");
    result.value = Number(n1_number) * Number(n2_number);
}

function divide(){
    let n1 = document.querySelector("#number1");
    let n1_number = n1.value;
    let n2 = document.querySelector("#number2");
    let n2_number = n2.value;
    let result = document.querySelector("#result");
    result.value = Number(n1_number) / Number(n2_number);
    
    if(n2_number == 0){
        alert("Error, Number 2 cannot be 0!")
    }
}

//Second Way 
function calculation(op){
    let n1 = document.querySelector("#number1");
    let n1_number = n1.value;
    let n2 = document.querySelector("#number2");
    let n2_number = n2.value;
    let result = document.querySelector("#result");
    if(op == '+'){
       result.value = Number(n1_number) + Number(n2_number);
    }
    else if(op == "-"){
        result.value = Number(n1_number) - Number(n2_number);
    }
    else if(op == "*"){
        result.value = Number(n1_number) * Number(n2_number);
    }
    else{
        result.value = Number(n1_number) / Number(n2_number);
        if(n2_number == 0){
            alert("Error")
        }
    }
}