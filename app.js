let listaAmigos = [];
let elementoListaAmigos = document.querySelector('#listaAmigos');
let elementoAmigoSorteado = document.querySelector('#resultado');
let amigosRetorno="";
let amigoPosicionLista=0;

function agregarAmigo(){
    let amigoIntroducido = document.getElementById('amigo').value.trim();
    if(amigoIntroducido != ""){
        listaAmigos.push(amigoIntroducido);
        amigosRetorno+="<li>"+listaAmigos[amigoPosicionLista]+"</li>";
        amigoPosicionLista++;
        elementoListaAmigos.innerHTML=amigosRetorno;
        limpiarCajaAmigo();
    }else{
        alert('Introduce un nombre valido por favor');
    }
    return;
}

function sortearAmigo(){
    if(listaAmigos.length==0){
        alert('No existen amigos para sortear');
    }else if(listaAmigos.length==1){
        alert('Deben existir mas amigos para sortear');
    }else{
        let amigoSorteado = Math.floor((Math.random()*listaAmigos.length));
        resultado.innerHTML = `<li>El amigo secreto sorteado es: ${listaAmigos[amigoSorteado]}</li>`;
        elementoListaAmigos.innerHTML="<li></li>";
        amigosRetorno="";
        amigoPosicionLista=0;
        listaAmigos=[];
    }
    return;
}

function limpiarCajaAmigo(){
    document.querySelector('#amigo').value='';
    return;
}
