function logout() {	 
	alert("Tem certeza que deseja sair?");
	location.replace("./index.thml")
}

function abrirEdicao() {	 
	document.getElementById("visualizao").style.visibility = "hidden";
	document.getElementById("edicao").style.visibility = "visible";
	document.getElementById("myTextarea").disabled = false;
}

function abrirVisualizacao() {	 
    document.getElementById("rotatescroll").style.visibility = "hidden";
	document.getElementById("visualizao").style.visibility = "visible";
	document.getElementById("edicao").style.visibility = "hidden";
	document.getElementById("colorpicker").style.visibility = "hidden";
	document.getElementById("myTextarea").disabled = true;	
}

function editarChao() {	
    document.getElementById("rotatescroll").style.visibility = "hidden";
    document.getElementById("colorpicker").style.visibility = "visible";
    localStorage.setItem("tipoEdicao", "chao");
 
}

function editarCeu() {
	document.getElementById("rotatescroll").style.visibility = "hidden";	
	document.getElementById("colorpicker").style.visibility = "visible";
	localStorage.setItem("tipoEdicao", "ceu");
    
}

function galeriaWidgets() {	 
	document.getElementById("colorpicker").style.visibility = "hidden";
	document.getElementById("rotatescroll").style.visibility = "visible";
}



function video(){

	
	
}



function caixaTexto() {	
  var x = document.createElement("TEXTAREA");
  var t = document.createTextNode("At w3schools.com you will learn how to make a website.");
  x.appendChild(t);
  document.body.appendChild(x);
}

function plaquinha(){
  var x = document.createElement("TEXTAREA");
  var t = document.createTextNode("At w3schools.com you will learn how to make a website.");
  x.appendChild(t);
  var nome = "plaquinha_text";
  document.body.appendChild(x,nome);
}
function myFunction() {
  var x = document.createElement("TEXTAREA");
  var t = document.createTextNode("At w3schools.com you will learn how to make a website.");
  x.appendChild(t);
  document.body.appendChild(x);
}




