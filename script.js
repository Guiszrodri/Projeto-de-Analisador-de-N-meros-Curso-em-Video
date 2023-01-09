let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option') //para criar um elemento dinâmico
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valores inválidos ou já encontrados na lista')
    }
    num.value = ''
    num.focus() // para o mouse ficar selecionado na caixa
}
function finalizar(){
    if(valores.legth == 0){
        window.alert('Os Valores estão vazios')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores [pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media += soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Foram cadastrado ${tot} números</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A Soma dos valor informado foi ${soma}</p>`
        res.innerHTML += `<p>A média dos valor informado foi ${media}</p>`
    }
}