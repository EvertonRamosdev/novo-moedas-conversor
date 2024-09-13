
const convertBuutton = document.querySelector(".bt1")
const convertSelect = document.querySelector(".currency-select1")

 async function convertvalues() {
    const pegarvalor = document.querySelector(".valordigitado").value
    const valoReal = document.querySelector(".real")
    const valorDolar = document.querySelector(".dolar")


    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    console.log(data)


    const dolarToday = data.USDBRL.high
    const euroToday =data.EURBRL.high
    const bitcoinToday =data.BTCBRL.high


    if (convertSelect.value == "dolar") {
        valorDolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
            .format(pegarvalor / dolarToday)
    }
   
    if (convertSelect.value == "euro") {
        valorDolar.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })
            .format(pegarvalor / euroToday)
    }
    if (convertSelect.value == "bitcoin") {
        valorDolar.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
            .format(pegarvalor / bitcoinToday)
    }
    valoReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "brl"
    }).format(pegarvalor)
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-dolar")
    const currencyImg = document.querySelector(".currency-img")

    if (convertSelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./img/estados-unidos.png"

    }

    if (convertSelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/euro.png"
    }


    if (convertSelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/bitcoin 1.png"
    }

    if (convertSelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./img/libra 1.png"
    }

    convertvalues()
}

convertSelect.addEventListener("click", changeCurrency)

convertBuutton.addEventListener("click", convertvalues)








