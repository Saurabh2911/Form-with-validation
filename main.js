  function validation()
   {

 var uname = document.regform.userName;  
 var fname = document.regform.firstName; 
 var lname = document.regform.lastName; 
 var email = document.regform.email; 
 var pass = document.regform.password;
 var pass2 = document.regform.password2;

 // Check for null entry fill by user
    if (uname.value.length <= 0) {  
        alert("Please enter a valid username");  
        uname.focus();  
        return false;  
    }  
    if (fname.value.length <= 0) {  
        alert("Please enter firstname");  
        fname.focus();  
        return false;  
    }  
    if (lname.value.length <= 0) {  
        alert("Please enter Last Name ");  
        lname.focus();  
        return false;  
    }  
    if (email.value.length <= 0) {  
        alert("Please enter a valid Email ID.");  
        email.focus();  
        return false;  
    } 
    if (pass.value.length <= 0) {  
        alert("Please Fill appropriate password");  
        pass.focus();  
        return false;  
    } 

    if (pass2.value.length <= 0) {  
        alert("Please Rewrite the password");  
        pass2.focus();  
        return false;  
    } 

    // validation of length of password
    if (pass.value.length < 8) {  
        alert("Password length must be of 8 or greater than 8 charaters.");  
        pass.focus();  
        return false;  
    } 
    if (pass.value.length > 20) {  
        alert("Password length must be of less than 20 charaters.");  
         pass.focus();  
        return false;  
    } 

    //check for confirm password
    if (pass.value != pass2.value) {  
        alert("Password not matches");  
        pass2.focus();  
        return false;  
    } 
        
    }
