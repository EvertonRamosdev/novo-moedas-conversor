
const convertBuutton = document.querySelector(".bt1")
const convertSelect = document.querySelector(".currency-select1")

function convertvalues() {
    const pegarvalor = document.querySelector(".valordigitado").value
    const valoReal = document.querySelector(".real")
    const valorDolar = document.querySelector(".dolar")

    const dolarToday = 5.2
    const euroToday = 7
    const libraToday= 9
    const bitcoinToday=22


    if( convertSelect.value == "dolar") {
        valorDolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
        .format(pegarvalor / dolarToday)
    }
    if( convertSelect.value == "libra") {
        valorDolar.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" })
        .format(pegarvalor / libraToday)
    }
    if( convertSelect.value == "euro") {
        valorDolar.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })
        .format(pegarvalor / euroToday)
    }
    if( convertSelect.value == "bitcoin") {
        valorDolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
        .format(pegarvalor / bitcoinToday)
    }
   valoReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "brl"
    }).format(pegarvalor)
}


function changeCurrency () {
        const currencyName= document.getElementById("currency-dolar")
        const currencyImg= document.querySelector(".currency-img")
        
        if( convertSelect.value == "dolar") {
            currencyName.innerHTML="Dólar americano"
            currencyImg.src="./img/estados-unidos (1) 1.png"
            
         }
           
        if( convertSelect.value == "euro") {
            currencyName.innerHTML="Euro"
            currencyImg.src = "./img/euro.png"
         }

            
        if( convertSelect.value == "bitcoin") {
            currencyName.innerHTML ="Bitcoin"
            currencyImg.src = "./img/bitcoin 1.png"
         }

         if( convertSelect.value== "libra") {
            currencyName.innerHTML="Libra"
            currencyImg.src = "./img/libra 1.png"
         }

         if( convertSelect.value== "real") {
            currencyName.innerHTML="Real"
            currencyImg.src = "./img/libra 1.png"
         }

         convertvalues()
    }

    convertSelect.addEventListener("click", changeCurrency)

    convertBuutton.addEventListener("click", convertvalues)


     





