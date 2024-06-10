function verif(){
    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var ann = document.getElementById("ann").value;
    var msg = document.getElementById("msg").value;
    var userup = document.getElementById("update").value;

    if(name.length == 0){
        alert("Name is invalid!");
    }
    if(!alphanum(pass) || pass.length == 0){
        alert("Password is invalid!");
    }
    if(ann.length == 0 || !alphanum(ann)){
        alert("Announcement is invalid!");
    }
    if(msg.length == 0){
        alert("Message is invalid!");
    }
    if(userup.length == 0 || !alpha(userup)){
        alert("User name is invalid!");
    }
}

function alpha(name){
    for(var i = 0; i < name.length; i++){
        if(!(name.charAt(i).toUpperCase() >= "A" && name.charAt(i).toUpperCase() <= "Z")){
            return false;
        }
    }
    return true;
}

function alphanum(input){
    for(var i = 0; i < input.length; i++){
        var char = input.charAt(i).toUpperCase();
        if(!((char >= "A" && char <= "Z") || (char >= "0" && char <= "9"))){
            return false;
        }
    }
    return true;
}
