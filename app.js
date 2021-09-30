/*
funções
    funções do js
        alert()
        console.log()

    funções personalizadas
    - funções criadas pela pessoa que está desenvolvendo.
    - a função precisa ser chamada para ser executada
    - para criar uma função usamos a palavra function
    function abacaxi ()

    }
*/

/*
function EscreverFrases (){
    console.log("Imagine uma nova história para a sua vida e acredite nela.")
}

EscreverFrases("Tudo sei que nada sei")
EscreverFrases("Sozinho vou rápido, juntos vamos longe")

*/


// parseFloat --> converte de texto para decimal
// parseInt --> converte de texto para inteiro

function Converter(){
    //DOM - Document Object Model
    //let valorEmDolar = documente.getElementById("valor").value
    let valorEmDolar = document.querySelector("#valor").value 

    /** CONVERTER O VALOR DO CAMPO EM NÚMERO */
    let valorEmDolarNumerico = parseFloat(valorEmDolar)

    let cotacaoDolar = 5
    let valorEmReal = valorEmDolar * cotacaoDolar

    /** INSERIR O RESULTADO NA TELA */
    document.querySelector("#valorConvertido").innerHTML= "O resultado em real é R$" + valorEmReal.toFixed(2)

    let bitcoin = valorEmReal / 225000 
    document.querySelector("#valorBitcoin").innerHTML = "O resultado em Bitcoin é " + bitcoin.toFixed(3)
}
