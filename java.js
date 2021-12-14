
function contar() {
    let palabra = document.getElementById("cajadetexto").value;
    let palabraFragmentada = Array.from(palabra)
    let contador = 0
    console.log(palabraFragmentada)
    for(i=0; i<palabraFragmentada.length; i++) {
      if(palabraFragmentada[i] === "a") {
        contador++
      }else{
      }
    }
    return contador
  }
  
  console.log(contar())