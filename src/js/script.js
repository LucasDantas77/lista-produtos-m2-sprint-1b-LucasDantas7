const divVitrine = document.querySelector(".containerListaProdutos")
const ul = document.querySelector("ul")
divVitrine.appendChild(ul)
const inputBusca = document.querySelector(".campoBuscaPorNome")
const btnBusca = document.querySelector("#pesquisa")
const btnTodosProdutos = document.querySelector("#todosProdutos")
const btnHortifruti = document.querySelector("#hortiFruti")
const btnPanificadora = document.querySelector("#panificadora")
const btnLaticinios = document.querySelector("#laticinios")
const total = document.querySelector("#total")
const listaCarrinho = document.querySelector(".lista-carrinho")
const lista = document.querySelector(".listaDeProdutos")
const newCarrinho = []



function criaLista(itens) {

    itens.forEach((element) => {
        let li = document.createElement("li")
        let img = document.createElement("img")
        let h3 = document.createElement("h3")
        let span = document.createElement("span")
        let ol = document.createElement("ol")
        let p = document.createElement("p")
        let botao = document.createElement("button")

        li.classList.add("listaDeProdutos")


        botao.id = element.id
        img.src = element.img
        h3.innerText = element.nome
        span.innerText = element.secao
        const componentes = element.componentes
        componentes.forEach((nutri) => {
            const li = document.createElement("li")
            li.innerText = nutri
            ol.appendChild(li)
        })


        p.innerText = `R$ ${element.preco},00`
        botao.innerText = "comprar"

        botao.addEventListener("click", (event) => {
            let btnAdicionar = event.target.id
            let object = produtos.find(objeto => {
                return objeto.id == btnAdicionar
            })

            newCarrinho.push(object)
            criaProdutosCarrinho(newCarrinho)

        })

        ul.appendChild(li)
        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(span)
        li.appendChild(ol)
        li.appendChild(p)
        li.appendChild(botao)


    });

}

criaLista(produtos)



function criaProdutosCarrinho(produto) {
    listaCarrinho.innerHTML = ""
    produto.forEach(element => {

        let liCarrinho = document.createElement("li")
        let imagem = document.createElement("img")
        let nome = document.createElement("h3")
        let secao = document.createElement("span")
        let preco = document.createElement("p")
        let botaoRemover = document.createElement("button")


        imagem.classList.add("imagem-carrinho")
        botaoRemover.classList.add("botao-remover")
        nome.classList.add("nome-produto")
        secao.classList.add("categoria-produto")
        preco.classList.add("preco-produto")

        liCarrinho.id = element.id
        imagem.src = element.img
        nome.innerText = element.nome
        secao.innerText = element.secao
        preco.innerText = `R$ ${element.preco},00`
        botaoRemover.innerText = "remover"
        botaoRemover.id = element.id

        botaoRemover.addEventListener("click", (event) => {
            let btnId = event.target.id
            let indice = newCarrinho.findIndex(objeto => btnId == objeto.id)

            newCarrinho.splice(indice, 1)


            criaProdutosCarrinho(newCarrinho)

        })

        liCarrinho.append(imagem, nome, secao, preco, botaoRemover)
        listaCarrinho.appendChild(liCarrinho)

    })

    atualizarCarrinho()
}




function todosProdutos() {

    const mostrarTodos = produtos.filter((produtos) => {
        return produtos.secao

    })
    ul.innerHTML = ""
    criaLista(mostrarTodos)

}


btnTodosProdutos.addEventListener("click", todosProdutos);

function hortifruti() {

    const mostrarHortifruti = produtos.filter((produtos) => {
        return produtos.secao === "Hortifruti"

    })
    ul.innerHTML = ""
    criaLista(mostrarHortifruti)

}


btnHortifruti.addEventListener("click", hortifruti);


function panificadora() {
    const mostrarPanificadora = produtos.filter((produtos) => {
        return produtos.secao === "Panificadora"


    })
    ul.innerHTML = ""
    criaLista(mostrarPanificadora)


}

btnPanificadora.addEventListener("click", panificadora);


function laticinios() {

    const mostrarLaticinios = produtos.filter((produtos) => {
        return produtos.secao === "Laticínios"

    })
    ul.innerHTML = ""
    criaLista(mostrarLaticinios)
    


}

btnLaticinios.addEventListener("click", laticinios);




function pesquisa() {

    ul.innerHTML = ""
    let resultadoBusca = []

    for (let i = 0; i < produtos.length; i++) {
        if (inputBusca.value == produtos[i].nome) {
            resultadoBusca.push(produtos[i])
        } else if (inputBusca.value == produtos[i].categoria) {
            resultadoBusca.push(produtos[i])
        } else if (inputBusca.value == produtos[i].secao) {
            resultadoBusca.push(produtos[i])
        }

    }


    criaLista(resultadoBusca)

}


btnBusca.addEventListener("click", pesquisa)




let valorTotal = document.querySelector("#total")
let quantidade = document.querySelector("#quantidade")

function atualizarCarrinho() {
    let contador = 0
    for (let i = 0; i < newCarrinho.length; i++) {

        contador += newCarrinho[i].preco
    }
    let valorQuantidade = newCarrinho.length
    valorTotal.innerText = contador.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
    quantidade.innerText = `quantidade : ${valorQuantidade}`


}