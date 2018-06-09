
let nome = document.getElementById('nome').value;
document.getElementById('nomeInput').innerHTML = nome;

function pegaNome(){
  let nome = document.getElementById('nome').value;
  document.getElementById('nomeInput').innerHTML = nome;

}

var btnTeste1 = document.getElementById('btnTeste1');
/*
btnTeste1.onclick = function(){
  let nome = document.getElementById('nome').value;
  document.getElementById('nomeInput').innerHTML = nome;
};
*/

btnTeste1.addEventListener('click', function(){
  let nome = document.getElementById('nome').value;
  document.getElementById('nomeInput').innerHTML = nome;
});

document.getElementById('nome').addEventListener('keyup', function(){
  let nome = document.getElementById('nome').value;
  document.getElementById('nomeInput').innerHTML = nome;
});
