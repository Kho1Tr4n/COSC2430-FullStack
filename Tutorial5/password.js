function verify(){
    let p1 = document.querySelector("#password")
    let p2 = document.querySelector("#retype_password")
    let res = document.querySelector("#verification_status")

    if(p1 == p2){
        res.innerText = 'Success';
        res.classList.add("status-success");
        res.classList.remove("status-error");
    }
    else{
        res.innerText = "Error";
        res.classList.add("status-error");
        res.classList.remove("status-success");
    }

    let length = false;
    if(p1 >= 8 && p1 <= 20 && p2 >= 8 && p2 >= 20){
        res.innerText = 'Success';
        res.classList.add("status-success");
        res.classList.remove("status-error");
    }
    else{
        res.classList.add("status-error");
        res.classList.remove("status-sucess");
    }

    let UpperCase = false;
    for(let i = 0; i < p1.length; i++){
        let c = p1.charAt(i);
        if('A' <= c && c <= 'Z'){
            UpperCase = true;
            break;
        }
    }

    if(UpperCase) {
        res.innerText = "Success, there is Upper Case";
        res.classList.add("status-success");
        res.classList.remove("status-error");
    }
    else{
        res.innerText = "Error, there is no uppercase";
        res.classList.add("status-error");
        res.classList.remove("status-sucess");
    }

    
}