const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".conteiner-flex"); 

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    if(textoEncriptado == ""){
        return; 
    } 
    else{
        mensaje.value = textoEncriptado;
        textArea.value = '';
        mensaje.style.backgroundImage = "none";
        mostrarBTNCopiar();
        quitarMensaje();
    }
}
function btnDesencriptar(){
    const TextoDesencriptado = desencriptar(textArea.value);
    if(TextoDesencriptado == ""){
        return;
    }else{
        mensaje.value = TextoDesencriptado;
        textArea.value = '';
        mensaje.style.backgroundImage = "none";
        mostrarBTNCopiar();
        quitarMensaje();
    }


}
function mostrarBTNCopiar(){

    const mostrarCopiar = document.getElementById('mostrar-C');
    mostrarCopiar.style.display = 'flex';
}
function copiar(){
    const textoObtenido = document.getElementById("texto-copiar");
    // textoObtenido.select();
    // textoObtenido.setSelectionRange(0,99999);
    // navigator.clipboard.writeText(textoObtenido.value);
    // alert("Se copio el texto: " + textoObtenido.value);

    // Si no funciona para mobiles usa el primero...
    navigator.clipboard.writeText(textoObtenido.value).then(() => {
        alert("Texto copiado al portapapeles");
    });

}
function quitarMensaje() {
    const quitame = document.getElementById('conteiner');
    quitame.style.display = 'none';  
} 
function desencriptar(stringDesencriptar)
{
    let matrizCodigo = [["e", "enter" ], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++) 
        {
            if(stringDesencriptar.includes(matrizCodigo[i][1]))
                {
                    stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
                }

        }
        return stringDesencriptar;
}
function encriptar(stringEncriptada)
{
    let matrizCodigo = [["e", "enter" ], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++) 
        {
            if(stringEncriptada.includes(matrizCodigo[i][0]))
                {
                    stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
                }

        }
        return stringEncriptada;
        
}