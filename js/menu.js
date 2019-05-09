function logout() {	 
	alert("Tem certeza que deseja sair?");
	location.replace("./index.thml")
}

function abrirEdicao() {	 
	document.getElementById("visualizao").style.visibility = "hidden";
	document.getElementById("edicao").style.visibility = "visible";
 
}

function abrirVisualizacao() {	 
	document.getElementById("visualizao").style.visibility = "visible";
	document.getElementById("edicao").style.visibility = "hidden";
	document.getElementById("colorpicker").style.visibility = "hidden";
}

function editarChao() {	
  document.getElementById("colorpicker").style.visibility = "visible";
  localStorage.setItem("tipoEdicao", "chao");
 
}

function editarCeu() {	 
  document.getElementById("colorpicker").style.visibility = "visible";
   localStorage.setItem("tipoEdicao", "ceu");
 
}

function galeriaWidgets() {	 
	document.getElementById("colorpicker").style.visibility = "hidden";
}