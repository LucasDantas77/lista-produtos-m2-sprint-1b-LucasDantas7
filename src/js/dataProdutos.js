const listaProducts = [];


function createItem(nome, preco, secao, categoria, img) {
    let item = {
        nome: nome,
        preco: preco,
        secao: secao,
        categoria: categoria,
        img: img
    }

    return item
}


function createProductsItem(objeto) {
    listaProducts.push(objeto)
};


let banana = createItem("Banana", 2.00, "Hortifruti", "fruta", "./src/img/banana.png");
let morango = createItem("Morango", 2.00, "Hortifruti", "fruta", "./src/img/morango.png");
let maca = createItem("Maçã", 2.00, "Hortifruti", "fruta", "./src/img/maça.png");
let pao = createItem("Pão", 4.00, "Panificadora", "Pães", "./src/img/pao.png");
let leite = createItem("Leite", 5.00, "Laticínio", "Leite", "./src/img/leite.png");

createProductsItem(banana);
createProductsItem(morango);
createProductsItem(pao);
createProductsItem(leite);
