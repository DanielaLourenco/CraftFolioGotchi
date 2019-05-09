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
	var x = document.createElement("INPUT");
	x.setAttribute("type", "text");
	x.setAttribute("value", "Hello World!");
	document.body.appendChild(x);
}