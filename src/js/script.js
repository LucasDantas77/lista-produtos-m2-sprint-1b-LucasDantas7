const ul = document.querySelector("ul")
const inputBusca = document.querySelector(".campoBuscaPorNome")
const btnBusca = document.querySelector("#pesquisa")
const btnTodosProdutos = document.querySelector("#todosProdutos")
const btnHortifruti = document.querySelector("#hortiFruti")
const btnPanificadora = document.querySelector("#panificadora")
const btnLaticinios = document.querySelector("#laticinios")
const total = document.querySelector("#total")
const quantidadeDeProduto = 0
const valorTotal = 0

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
}


btnTodosProdutos.addEventListener("click", todosProdutos);

function hortifruti() {

    const mostrarHortifruti = listaProducts.filter((produtos) => {
        return produtos.secao === "Hortifruti"

    })
    ul.innerHTML = ""
    criaLista(mostrarHortifruti)
}


btnHortifruti.addEventListener("click", hortifruti);


function panificadora() {

    const mostrarPanificadora = listaProducts.filter((produtos) => {
        return produtos.secao === "Panificadora"


    })
    ul.innerHTML = ""
    criaLista(mostrarPanificadora)
}

btnPanificadora.addEventListener("click", panificadora);


function laticinios() {

    const mostrarLaticinios = listaProducts.filter((produtos) => {
        return produtos.secao === "Laticínio"

    })
    ul.innerHTML = ""
    criaLista(mostrarLaticinios)
}


btnLaticinios.addEventListener("click", laticinios);




function pesquisa() {

    let resultadoBusca = []
    ul.innerHTML = ""
    for (let i = 0; i < listaProducts.length; i++) {
        if (inputBusca.value == listaProducts[i].nome) {
            resultadoBusca.push(listaProducts[i])
        }
    }


    criaLista(resultadoBusca)

}


btnBusca.addEventListener("click", pesquisa)



function precoTotal() {
    const quantidadeDeProduto = listaProducts.reduce((valorAnterior, valorAtual) => {
        const soma = {
            valorTotal: 0
        }
        soma.preco = valorAnterior.preco + valorAtual.preco
        return soma

    })

}

precoTotal()