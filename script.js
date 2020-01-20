
function relogio(){

    var date = new Date();
    var horario = window.document.querySelector("div#horario");
    var pRelogio = window.document.querySelector("p#relogio");
    pRelogio.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    setTimeout("relogio()", 1000);

    var h = date.getHours();    

    if(h >= 0 && h < 12){

        pRelogio.style.color = "#181818";

    }else if(h >= 12 && h < 20){

        horario.style.backgroundImage = "url('imagens/fototarde.png')";
        document.body.style.background = "#b46f36";
        pRelogio.style.color = "#bebaba";        

    }else{

        horario.style.backgroundImage = "url('imagens/fotonoite.png')";
        document.body.style.background = "#acaaaa";
        pRelogio.style.color = "#a1a1a1";       

    }

}

relogio(); 