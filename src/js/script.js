const ul = document.querySelector("ul")
const inputBusca = document.querySelector(".campoBuscaPorNome")
const btnBusca = document.querySelector("#pesquisa")
const btnTodosProdutos = document.querySelector("#todosProdutos")
const btnHortifruti = document.querySelector("#hortiFruti")
const btnPanificadora = document.querySelector("#panificadora")
const btnLaticinios = document.querySelector("#laticinios")
const total = document.querySelector("#total")


function criaLista(itens) {

    itens.forEach(element => {
        let li = document.createElement("li")
        let img = document.createElement("img")
        let h3 = document.createElement("h3")
        let span = document.createElement("span")
        let p = document.createElement("p")

        img.src = element.img
        h3.innerText = element.nome
        span.innerText = element.secao
        p.innerText = `R$ ${element.preco},00`

        ul.appendChild(li)
        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(span)
        li.appendChild(p)

    });

}

criaLista(listaProducts)


function todosProdutos() {

    const mostrarTodos = listaProducts.filter((produtos) => {
        return produtos.secao

    })
    ul.innerHTML = ""
    criaLista(mostrarTodos)
    precoTotal(mostrarTodos)
}


btnTodosProdutos.addEventListener("click", todosProdutos);

function hortifruti() {

    const mostrarHortifruti = listaProducts.filter((produtos) => {
        return produtos.secao === "Hortifruti"

    })
    ul.innerHTML = ""
    criaLista(mostrarHortifruti)
    precoTotal(mostrarHortifruti)
}


btnHortifruti.addEventListener("click", hortifruti);


function panificadora() {
    const mostrarPanificadora = listaProducts.filter((produtos) => {
        return produtos.secao === "Panificadora"


    })
    ul.innerHTML = ""
    criaLista(mostrarPanificadora)
    precoTotal(mostrarPanificadora)

}

btnPanificadora.addEventListener("click", panificadora);


function laticinios() {

    const mostrarLaticinios = listaProducts.filter((produtos) => {
        return produtos.secao === "Laticínio"

    })
    ul.innerHTML = ""
    criaLista(mostrarLaticinios)
    precoTotal(mostrarLaticinios)

}

btnLaticinios.addEventListener("click", laticinios);




function pesquisa() {

    ul.innerHTML = ""
    let resultadoBusca = []

    for (let i = 0; i < listaProducts.length; i++) {
        if (inputBusca.value == listaProducts[i].nome) {
            resultadoBusca.push(listaProducts[i])
        }
    }

    precoTotal(resultadoBusca)
    criaLista(resultadoBusca)

}


btnBusca.addEventListener("click", pesquisa)



function precoTotal(array) {

    const quantidadeDeProduto = array.reduce((valorAnterior, valorAtual) => {
        return valorAnterior + valorAtual.preco
    }, 0)

    total.innerText = quantidadeDeProduto.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })

}

precoTotal(listaProducts)