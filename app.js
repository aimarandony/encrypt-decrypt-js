const TEXTO_ENCRIPTAR = "Hola Mundo";
const TEXTO_DESENCRIPTAR = "gfñnkjaa-%lktsmlcbñn";

const ABC = ["a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","ñ","o","p","q","r","s","t",
"u","v","w","x","y","z"];

const OTHER_CHARACTER = ["*","-","{","+","%"]

const encriptar = (text) => {
  let splitText = text.split("");
  console.log(splitText);

  let msgFinalArray = [];

  splitText.map(data => {
      let ecLetter2;
      let ecLetter1;
      for (let i = 0; i < ABC.length; i++) {
          if (ABC[i] == data.toLowerCase()) {
            if (i < 2) {
                ecLetter2 = ABC[i];           
                ecLetter1 = ABC[i];           
            } else {
                ecLetter2 = ABC[i - 2];
                ecLetter1 = ABC[i - 1];
            }
          } else if (data.toLowerCase() == " ") {
              ecLetter1 = OTHER_CHARACTER[Math.floor(Math.random() * OTHER_CHARACTER.length)];
              ecLetter2 = OTHER_CHARACTER[Math.floor(Math.random() * OTHER_CHARACTER.length)];
          }
      }
      msgFinalArray.push(ecLetter1 + ecLetter2);
  })

  console.log(msgFinalArray.join(''));
  return msgFinalArray.join('');
};

const desencriptar = (text) => {
    let splitText = text.split("");
    console.log('1', splitText);
  
    let msgFinalArray = [];
  
    for (let i = 0; i < splitText.length; i++) {
        let originalLetter;
        if (i % 2)   {
            for (let j = 0; j < ABC.length; j++) {
                if(ABC[j] == splitText[i]) {
                    if (j < 2) {
                        originalLetter = ABC[j]
                    } else {
                        originalLetter = ABC[j + 2];
                    }
                } else if (OTHER_CHARACTER.indexOf(splitText[i]) > -1){
                    originalLetter = " ";
                }
            }
        }    
        msgFinalArray.push(originalLetter)
    }

    console.log(msgFinalArray.join(''));
    return msgFinalArray.join('');
};

let texto = document.getElementById('txtTexto')
let resultado = document.getElementById('txtResultado')

function handleEncriptar() {
    let result = encriptar(texto.value);
    resultado.value = result
}

function handleDesencriptar() {
    let result = desencriptar(texto.value);
    resultado.value = result
}

function limpiar(){
    texto.value = ""
}