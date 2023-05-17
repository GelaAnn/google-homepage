function check_valid_mail(){
    var email = document.getElementById('email').value
    var result = document.getElementById('display_check_result')
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    
    result.innerHTML = "Thank you for subscribing to us"
    result.style.display = "block"
    return true //returns tue and submit the form
  }
    result.innerHTML = "Enter valid email"
    result.style.display = "block"
    return false //returns false and informs user to enter correct mail
}