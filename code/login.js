function login(){
    const email=document.getElementById("email").value
    const pass=document.getElementById("pass").value
    
    if(email ==="elgine@karunya.edu.in" && pass==="123"){
        alert('login Successfull '+ email);
    } else{
        alert('login failed');
    }
return false;
}