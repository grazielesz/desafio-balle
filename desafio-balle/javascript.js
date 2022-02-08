function funcaoTeste(){
    var texto;
    var formulario = document.querySelector("#nome");
    texto = document.querySelectorAll('#info')[0];
    console.log(texto);
    console.log(formulario.value);

    texto.innerHTML = texto.innerHTML + `<br><br> nome: ${document.querySelector("#nome").value}
                       <br> idade: ${document.querySelector("#idade").value}
                       <br> skills: ${document.querySelector("#skills").value}`;

}