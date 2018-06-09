// Preparando o projeto para persistir dados

function executaFormulario() {

  if(validacao()){
    return;
  }
  let nome = document.getElementById('nome').value;
  let sobrenome = document.getElementById('sobrenome').value;
  let estado = document.getElementById('estado').value;
  let cidade = document.getElementById('cidade').value;

  let exibeDados = document.getElementById('exibeDados');

  let pessoa = {'Nome':nome,
    'Sobrenome':sobrenome,
    'Estado': estado,
    'Cidade':cidade
  };
  let chaves = Object.keys(pessoa);
  for(let item of chaves){
    // usa-se pessoa[item] porque desta forma não é possivel acessar
    // como key normal, então deve-se acessar pelo array
    exibeDados.innerHTML += `<p>${item}: ${pessoa[item]}</p>`;

  }
}

function escolheEstado() {

  let lista = [
    {
      "estado":"RS",
      "cidades":[
        {"nome":"Santa Cruz do Sul", "valor":"santacruz"},
        {"nome":"Porto Alegre", "valor":"portoalegre"}
      ]
    },
    {
      "estado":"SC",
      "cidades":[
        {"nome":"Florianópolis", "valor":"florianopolis"},
        {"nome":"Blumenau", "valor":"blumenau"}
      ]
    }
  ];

  let estado = document.getElementById('estado').value;
  let cidade = document.getElementById('cidade');
  let existeEstado = false;

  for(let item of lista) {
    if(item.estado == estado){
      existeEstado = true;
      let option = "";
      for(let item2 of item.cidades){
        option += `<option value="${item2.valor}">${item2.nome}</option>`
      }
      cidade.style.display = "initial";
      cidade.innerHTML = option;
    }
  }
  if(!existeEstado){
    cidade.style.display = "none";
  }

}

function validacao() {
  let temErro = false;

  let nome = document.getElementById('nome').value;
  let nomeErro = criaElementoErro('nome');
  if(nome == ""){
    nomeErro.innerHTML = "Preencha um nome válido";
    nomeErro.style.display = "initial";
    temErro = true;
  } else {
    nomeErro.style.display = "none";
  }

  let sobrenome = document.getElementById('sobrenome').value;
  let sobrenomeErro = criaElementoErro('sobrenome');
  if(sobrenome == ""){
    sobrenomeErro.innerHTML = "Preencha um sobrenome válido";
    sobrenomeErro.style.display = "initial";
    temErro = true;
  } else {
    sobrenomeErro.style.display = "none";
  }

  let estado = document.getElementById('estado').value;
  let estadoErro = criaElementoErro('estado');
  if(estado == ""){
    estadoErro.innerHTML = "Selecione um estado válido";
    estadoErro.style.display = "initial";
    temErro = true;
  } else {
    estadoErro.style.display = "none";
  }
  return temErro;
}

function criaElementoErro(idAlvo) {
  let elementoAlvo = document.getElementById(idAlvo);
  let nodePai = elementoAlvo.parentNode;

  if(!document.getElementById(idAlvo+'Erro')){
    let valorAlvo = document.getElementById(idAlvo).value;
    nodePai.innerHTML += `<span id="${idAlvo}Erro" sytle="display:none"></span>`
    document.getElementById(idAlvo).value = valorAlvo;
  }
  return document.getElementById(idAlvo+'Erro');
}
