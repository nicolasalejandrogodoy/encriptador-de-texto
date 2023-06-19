const textArea = document.querySelector(".myTextarea");
const botonCopiar = document.querySelector(".copiar");

const parrafo = document.querySelector(".txt-encriptado");
const contenedor = document.querySelector(".contenedor-txt-encriptado")


function btnCopiar(){
    parrafo.select();
    document.execCommand("copy");
   botonCopiar.textContent="✔ Copiado"
   botonCopiar.style.color="#09df25";
   

}


function btnEncriptar(){
 

    const textoEnciptado = encriptarTexto(textArea.value)
    if(textArea.value !==""){ 
        contenedor.style.display="none";
        botonCopiar.style.display="flex";
        
        
    }
    parrafo.value=textoEnciptado;
    textArea.value="";
    botonCopiar.textContent="Copiar";
    botonCopiar.style.color="#0A3871";
}
function btnDesencriptar(){
    const textoDesencriptado=desencriptarTexto(textArea.value)
    if(textArea.value !==""){ 
      contenedor.style.display="none";
      botonCopiar.style.display="flex";
      
      
  }
    parrafo.value=textoDesencriptado;
    textArea.value="";
    botonCopiar.textContent="Copiar";
    botonCopiar.style.color="#0A3871";
}
function desencriptarTexto(desencriptar) {
   
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    desencriptar=desencriptar.toLowerCase();
  
    for(let i=0;i<matrizCodigo.length;i++){
  if(desencriptar.includes(matrizCodigo[i][1])){
    desencriptar=desencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
  }}
  return desencriptar;
    }
  


    function encriptarTexto(texto) {
      const mapaCodigo = new Map([
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
      ]);
    
      texto = texto.toLowerCase();
    
      for (const [clave, valor] of mapaCodigo) {
        if (texto.includes(clave)) {
          texto = texto.replaceAll(clave, valor);
        }
      }
    
      return texto;
    }


   
 