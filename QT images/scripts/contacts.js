//This script executes script in contact us and sign up page
function checkinput() {

    //var phonematch = /^\d{10}$/;

    // && (document.getElementById('phone').value.match(phonematch))
    
    const specialcharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0123456789]/

    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('email').value))) {
        if (document.getElementById('phone').value.match(/^\d{10}$/)) {
            if(document.getElementById('password').value.length > 3){
              if((document.getElementById('firstname').value.length > 3) && (document.getElementById('lastname').value.length > 3)){
                if(!((specialcharacters.test(document.getElementById('firstname').value)) || (specialcharacters.test(document.getElementById('lastname').value)))) {
                  
                  document.getElementById('display_check_result').innerHTML = "Thank you for subscribing to us"
                  //Handle what happens when someone signs up
                



            document.getElementById('display_check_result').style.display = "block"

            return true
                  
                }
                
                document.getElementById('display_check_result').innerHTML = "Name cannot contain numbers and symbols"



            document.getElementById('display_check_result').style.display = "block"

            return false
                  
              }
              
              document.getElementById('display_check_result').innerHTML = "Firstname and Lastname should be at least 3 letters"

            document.getElementById('display_check_result').style.display = "block"

            return false
              
            }
            document.getElementById('display_check_result').innerHTML = "Password must be greater than 3"

            document.getElementById('display_check_result').style.display = "block"

            return false
        }

        document.getElementById('display_check_result').innerHTML = "Phone Number must be 10 and not contain invalid character"
        document.getElementById('display_check_result').style.display = "block"
        return false

        // document.getElementById('display_check_result').innerHTML = "Thank you for subscribing to us"
        // document.getElementById('display_check_result').style.display = "block"
        // return true //returns tue and submit the form
    }
    document.getElementById('display_check_result').innerHTML = "Enter valid email"
    document.getElementById('display_check_result').style.display = "block"
    return false //returns false and informs user to enter correct mail
}

function verify_login_details(){
  if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('loginemail').value))) {
    if(document.getElementById('password').value.length > 3){
      
      document.getElementById('display_check_result').innerHTML = "You have successfully logged in"
      //handle the result

    document.getElementById('display_check_result').style.display = "block"

    return true
      
    }
    
    document.getElementById('display_check_result').innerHTML = "Password must be greater than 3"



            document.getElementById('display_check_result').style.display = "block"

            return false
  }
  document.getElementById('display_check_result').innerHTML = "Enter valid email"

    document.getElementById('display_check_result').style.display = "block"

    return false
}