var respostas = {
  trabalharPresencial: "",
  cidadeSelecionada: "",
  numerosMesa: "",
  andar: ""
};
document.getElementById("resposta").disabled = false;
document.getElementById("andares").disabled = true;
document.getElementById("numeros").disabled = true;
document.getElementById("btnMesa").disabled = true;
document.getElementById("btnAndar").disabled = true;

function confirmar() {
  var resposta = document.getElementById("resposta").value;
  document.getElementById("btnResetar").disabled = false;

  if (resposta == "Escritório") {
    respostas.trabalharPresencial = "Escritório";
    document.getElementById("btnConfirmarCidade").disabled = false;
    document.getElementById("local2").disabled = false;
    document.getElementById("local1").disabled = false;
    document.getElementById("resposta").disabled = true;
    document.getElementById("btnConfirmarIda").disabled = true;
  } else if (resposta == "Home Office") {
    respostas.trabalharPresencial = "Home Office";
    document.getElementById("btnConfirmarIda").disabled = true;
    agradecer();
    document.getElementById("resposta").disabled = true;
  } else if (resposta == "") {
    alert("Por favor preencha o campo");
  } else {
    console.log("Digite novamente");
  }

  document.getElementById("resposta").value = "";
}

function obtemCidadeSelecionada() {
  var sp = document.getElementById("local1");
  var santos = document.getElementById("local2");
  if (sp.checked) {
    respostas.cidadeSelecionada = "São paulo";

    document.getElementById("local2").disabled = true;
    document.getElementById("local1").disabled = true;
    document.getElementById("btnMesa").disabled = false;
    document.getElementById("btnConfirmarCidade").disabled = true;

    document.getElementById("numeros").disabled = false;
  } else if (santos.checked) {
    respostas.cidadeSelecionada = "Santos";
    document.getElementById("local2").disabled = true;
    document.getElementById("local1").disabled = true;
    document.getElementById("btnConfirmarCidade").disabled = true;
    document.getElementById("btnMesa").disabled = false;

    document.getElementById("numeros").disabled = false;
  } else {
    console.log("nada foi selecionado");
  }
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function mudaTema() {
  document.body.classList.toggle("dark");
}

function resetar() {
  document.getElementById("btnConfirmarIda").disabled = false;
  document.getElementById("resposta").disabled = true;
  document.getElementById("resposta").disabled = false;
  respostas.trabalharPresencial = "";
  respostas.cidadeSelecionada = "";
  respostas.numerosMesa = "";
  respostas.andar = "";
  document.getElementById("btnResetar").disabled = true;
  console.log(respostas);
}

function agradecer() {
  var agradecimento = "Obrigado por preencher o formulário ";
  if (respostas.trabalharPresencial == "Escritório") {
    alert(
      agradecimento +
        "você vai trabalhar no " +
        respostas.trabalharPresencial +
        " de " +
        respostas.cidadeSelecionada +
        " no " +
        respostas.andar +
        " andar " +
        " na posição " +
        respostas.numerosMesa
    );
  }

  if (respostas.trabalharPresencial == "Home Office") {
    alert(
      agradecimento + "você vai trabalhar via " + respostas.trabalharPresencial
    );
  }
}

function numeros() {
  respostas.numerosMesa = document.getElementById("numeros").value;
  document.getElementById("numeros").disabled = true;
  document.getElementById("btnMesa").disabled = true;
  document.getElementById("btnAndar").disabled = false;
  document.getElementById("andares").disabled = false;
}

function andares() {
  respostas.andar = document.getElementById("andares").value;
  document.getElementById("andares").disabled = true;
  document.getElementById("btnAndar").disabled = true;
  agradecer();
  console.log(respostas);
}
