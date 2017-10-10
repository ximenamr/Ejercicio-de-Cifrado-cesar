# Ejercicio-de-Cifrado-cesar
ESTA WEB SIRVE PARA PODER ENCRIPTAR MENSAJES, LA PAGINA SOLICITA EL INGRESO DE LA  INFORMACIÓN PARA CIFRAR O DESCIFRAR, NO PERMITE MAYUSCULAS NI ESPACIOS VACIOS, UTILIZANDO EL ALGORITMO DE CIFRADO CESAR.

#PSEUDOCODIGO:

// creando funcion cifrar, aplicando cifrado cesar
function cipher( words){
  words = prompt('Por favor ingrese su frase');// SE SOLICITA QUE INGRESE DATOS
  var str = '';
  for (i= 0; i< words.length;i++){  // SE RECORRE LA LONGITUD DE LA FRASE
    if(str >= 65 && str <= 90) {///*ver si ´pertenece al rango de las letras que tienen ascii de 65-90*/
      var wordASCII = words[i].charCodeAt(0);
      var numberCipher = ( wordASCII - 65 + 33) % 26 + 65;// se obtiene codigo ascii
      str += String.fromCharCode(numberCipher);// SE OBTIENE LA LETRA
    }else {
             wordASCII = words[i].charCodeAt(0);
             numberCipher = ( wordASCII - 97 + 33) % 26 + 97;// se obtiene codigo ascii
      str += String.fromCharCode(numberCipher); // SE OBTIENE LA LETRA
    }
    return str;
  }
}

cipher(); 
