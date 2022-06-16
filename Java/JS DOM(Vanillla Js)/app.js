//console.dir(document)
//console.log(document.URL)
console.log(document.title)
document.title="code with codebooth"
console.log(document.head)
console.log(document.body)
console.log(document.forms)


//Select ElementById
var headTitle=document.getElementById("header-title")
headTitle.textContent="Code with Angie"
headTitle.innerText="Code with Codebooth "

var header= document.getElementById("main-header")
header.style.borderBottom="solid 3px black"


//Select ElementByClassname
//let items= document.getElementsByClassName("list-group-item")
//items[0].innerText="Codebooth"
//items[2].style.backgroundColor="Yellow"
//items.style.backgroundColor="Yellow"

//for(var i=0; i<items.length; i++){
    //items[i].style.backgroundColor="green"
//}

//Select Element by tag name
let li= document.getElementsByTagName("li")
li[0].innerText="Item 5"
for (var i=0; i<li.length; i++){
    li[i].style.backgroundColor="#f4f4f4"
}

//querySelector
//let wraper= document.querySelector(".container")
//wraper.style.fontweight="Bold"
//console.log(wraper)

//Transerving The DOM
var items= document.querySelector("#items")
console.log(items.parentNode)
items.parentNode.style.backgroundColor="green"

//console.log(items.childNodes)
//items.childNodes.style.backgroundColor="blue"
console.log(items.children)
items.children[2].style.fontsize="20px"
//items.firstChild.textContent="hello Angie"

//Create Element
var newli=document.createElement("li")
newli.className="list-group-item"
newli=document. createTextNode("Item 33")
console.log(newli)