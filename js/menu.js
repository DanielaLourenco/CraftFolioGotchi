function logout() {	 
	alert("Tem certeza que deseja sair?");
	location.replace("index.thml")
 /* var x = document.getElementById("visualizacao");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }*/
}

function abrirEdicao() {	 
	document.getElementById("visualizao").style.visibility = "hidden";
	document.getElementById("edicao").style.visibility = "visible";
 
}

function abrirVisualizacao() {	 
	document.getElementById("visualizao").style.visibility = "visible";
	document.getElementById("edicao").style.visibility = "hidden";
 
}

function corChao() {	
  alert("baaa"); 
  var x = document.createElement("INPUT");
  x.setAttribute("type", "color");
  document.body.appendChild(x);
 
}