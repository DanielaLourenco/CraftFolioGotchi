function logout() {	 
	alert("Tem certeza que deseja sair?");
	location.replace("./index.thml")
}

function abrirEdicao() {	 
	document.getElementById("visualizao").style.visibility = "hidden";
	document.getElementById("edicao").style.visibility = "visible";
 
}

function abrirVisualizacao() {	 
    document.getElementById("rotatescroll").style.visibility = "hidden";
	document.getElementById("visualizao").style.visibility = "visible";
	document.getElementById("edicao").style.visibility = "hidden";
	document.getElementById("colorpicker").style.visibility = "hidden";
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


function caixaTexto() {	
    var a = document.createElement("TEXTAREA");
	input.className = 'myCustomTextarea';
    var t = document.createTextNode("this is a test");
    a.appendChild(t);
    var nome = "caixaTexto";
    document.body.appendChild(a,nome);
}

function plaquinha(){
  var img = document.createElement("img");
  img.src = "img/plaquinha.png"; 
  img.height = 100; 
  img.width  = 100;
  var class_name = "plaquinha";
  img.setAttribute("class", class_name);
  document.body.appendChild(img);

}
