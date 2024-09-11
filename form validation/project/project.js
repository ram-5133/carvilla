function registrationform(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;
    const checkbox = document.getElementById("mycheck").value;
    let p=/^[a-zA-Z ]{3,13}$/
    
    let em=/^[a-zA-Z0-9\._%\-]+@[A-za-z0-9\.\-]+\.[A-Za-z]{2,}$/

    let psw=/^[A-Za-z0-9]{5,10}$/

    if(name == ""){
        document.getElementById("fullname").innerHTML="pleas enter your name";
    }
    else if(!p.test(name)){
        document.getElementById("fullname").innerHTML="pleas enter your name properly";
    }
    else{
        document.getElementById("fullname").style.display="none";
    }
    if(email == ""){
        document.getElementById("mail").innerHTML="please enter your email address";
    }
    else if(!em.test(email)){
        document.getElementById("mail").innerHTML="please enter your email address properly";
    }
    else{
        document.getElementById("mail").style.display="none";
    }
    if(password == ""){
        document.getElementById("ps").innerHTML="please enter your password";
    }
    else if(!psw.test(password)){
        document.getElementById("ps").innerHTML="please enter your password properly";
    }
    else{
        document.getElementById("ps").style.display="none";
    }
    if(cpassword === ""){
        document.getElementById("cps").innerHTML="please retype your password";
    }
    else if(password == cpassword){
        document.getElementById("cps").style.display="none";
    }
    else{
        document.getElementById("cps").innerHTML="please enter your password properly";
    } 
    if(document.getElementById('mycheck').checked == true){
        document.getElementById('tex').style.display='none';
    }
    else{
        document.getElementById('tex').innerHTML="agree";
    }
}