class Util{
  static lista(lista){
    let html = '<ul>';
    for (let item of lista) {
      html +=`
        <li>${item}</li>
      `;
    }
    html += '</ul>';
    return html;
  }
}

let lista = ["Adalto", "Sofie", "Luna"];
document.getElementById('listaUsuarios').innerHTML = Util.lista(lista);
