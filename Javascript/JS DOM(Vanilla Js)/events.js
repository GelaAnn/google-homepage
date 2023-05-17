//var btn = document.querySelector("button")
//console.log(btn)
//btn.addEventListener("click",btnClick)
//btn.addEventListener("dblclick",btnClick)
//btn.addEventListener("mousedown",btnClick)
//btn.addEventListener("mouseup",btnClick)
//btn.addEventListener("click",btnClick)

//function btnClick(e){

    //let list= document.getElementsByTagName("li")
    //for(var i=0; i<list.length; i++){
        //list[i].style.backgroundColor="pink"
    //}
    //console.log("you clicked me")
    //console.log(e.clientY)
    //console.log(e.clientX)
    //console.log(e.altKey)
    //console.log(e.shiftKey)
    //document.getElementById("header-title").innerText="Hello Welcome"
//}
var form= document.querySelector("#form")
var itemList=document.querySelector('#items')

itemList.addEventListener("click",removeItem)

function removeItem(e){
    //console.log(e.target)
    if(e.target.classList.contains('delete')){
      //console.log(1)  

      //simple alert to confirm activity 
      if(confirm("Are you sure of this decision?")){
        let li = e.target.parentElement;
        itemList.removeChild(li)
      }

      }
}
console.log(localStorage)
localStorage.setItem("jwt","jfjdksofdgknzskv")
localStorage.setItem('userName','Angie')

displayUserName = document.querySelector("#header-title")
displayUserName.innerText =localStorage.getItem('userName')

//console.log(form)
form.addEventListener('submit' ,btnClick)
function btnClick(e){
    e.preventDefault()
    //console.log("you click me")
console.log(document.querySelector("#userInput").value)
   var userInput = document.querySelector("#userInput").value

   //create new list
   var li = document.createElement('li')
   li.className = "list-group-item"
   
   //add textnode with input value
   li.appendChild(document.createTextNode(userInput))

//create a new button
   var deleteBtn = document.createElement('button')

   //give your button bootstrap class
   deleteBtn.className="btn btn-danger btn-sm float-right delete"
   deleteBtn.appendChild(document.createTextNode('x'))
   li.appendChild(deleteBtn)
  itemList.appendChild(li)
}