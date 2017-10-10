// creando funcion cifrar, aplicando cifrado cesar
function cipher( words){
  words = prompt('Por favor ingrese su frase');// soliCIta frase
  var str = '';
  for (i= 0; i< words.length;i++){
    if(str >= 65 && str <= 90) {///*ver si ´pertenece al rango de las letras que tienen ascii de 65-90*/
      var wordASCII = words[i].charCodeAt(0);
      var numberCipher = ( wordASCII - 65 + 33) % 26 + 65;// se obtiene codigo ascii
      str += String.fromCharCode(numberCipher);
    }else {
             wordASCII = words[i].charCodeAt(0);
             numberCipher = ( wordASCII - 97 + 33) % 26 + 97;// se obtiene codigo ascii
      str += String.fromCharCode(numberCipher);
    }
    return str;
  }
}

cipher(); 
