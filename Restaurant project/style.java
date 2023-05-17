body{color:white;
    padding:0;
    box-sizing: border-box;
    height:auto;

}
nav{ height: 70px; 
    width: auto;
background: white;}

nav ul{
    padding-left: 990px;
list-style: none;
font-size: 20px;

}
.sidebar {
height: 100%; 
width: 0; 
position: fixed; 
z-index: 1; 
top: 0;
left: 0;
background: white;
overflow-x: hidden; 
padding-top: 50px; 
transition: 0.5s; 
}


.sidebar a {
padding: 8px 8px 8px 32px;
text-decoration: none;
font-size: 25px;
color: black;
display: block;
transition: 0.3s;
}


.sidebar a:hover {
color: palevioletred;
}


.sidebar .closebtn {
position: absolute;
top: 0;
right: 25px;
font-size: 36px;
margin-left: 50px;
}


.openbtn {
font-size: 20px;
cursor: pointer;
color: black;
border: none;
}

.openbtn:hover {
background-color: #444;
}


#main {
transition: margin-left .5s; 
padding: 20px;
}

nav ul li a{
    margin-right: 30px;
     color: black; 
     text-decoration: none;
}
.cta{height:700px;
    width: auto;
    padding-top:10px; 
}
.cta{background:url(burger.jpeg);
background-size: cover;}

.cta img{padding-left: 400px;
    padding-top: 50px;
margin-left: auto;
margin-right: auto;
    padding-bottom: 50px;
    height: 500px;
    width: auto;
    margin-top: 70px;
    
}
.hero{margin: 100px;
    max-width:auto ;

    color: black;
    font-size: 20px;
    text-align: center;
    padding-top:10px;
padding-bottom: 50px;}

.hero-head{color: goldenrod;
           font-size: 35px;}
.boundary{width: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding-top: 50px;
          padding-right:200px;
        padding-left: 200px;}

.banner p{
    flex:2;
    color: green;
    box-sizing: border-box;
    border:palevioletred;
    height: 250px;

}
.domain{
    background: cornsilk;
    padding-top: 30px;
}
.name{width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-top: 50px;
  padding-left: 200px;
  padding-right:200px;}

.plot{background: cornsilk;
    padding-top: 30px;
    
}

.main{background: cornsilk;
    padding-top: 30px;}

.car{width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-top: 50px;
    padding-bottom:100px;
    padding-left:200px;
    padding-right:200px;
  }

section{padding: 0;
    width: auto;
    display:flex;
    background: wheat;
    padding-bottom: 100px;
    padding-left:200px;
    padding-right: 200px;
    padding-top:50px;
    justify-content: space-between;
}
section ul{list-style: none;}
.enter {
    text-align: center;
}
.copyright{
text-align: center;
width:auto;

} 
@media(max-width: 770px) {
    .cta{display:block;
        width: 760px;
        
    }
    .cta img{padding-left: 150px;}
@media(max-width: 770px) {
    .cta{display:block;

    }
    }

    @media(max-width: 770px) {}

    
@media(max-width: 770px) {
.name{display:block;
    padding-left: 95px;
    padding-right: 95px;
}
.domain{padding-bottom: 100px;}
}

    }
@media(max-width: 770px) {
.car{display:block;
    padding-left: 95px;
    padding-right: 95px;
}
}

@media(max-width: 770px) {
.banner{display:block;
}
}

@media(max-width: 770px) {
.boundary{display:block;
    padding-left: 95px;
    padding-right: 95px;
}
}

@media(max-width: 770px) {
.copyright{display:block;
    padding-left: 95px;
    padding-right: 95px;
}
} 


@media(max-width: 770px) {
section{display: inline;}
}