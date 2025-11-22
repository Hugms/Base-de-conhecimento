<<<<<<< HEAD
const cardContainer = document.querySelector(".card-container");
const inputBusca = document.querySelector('header div input');
let dados = [];

async function iniciarBusca() {
    // Pega o valor do input e converte para minúsculas para busca case-insensitive
    const termoBusca = inputBusca.value.toLowerCase();

    // Limpa o container antes de renderizar novos cards para evitar duplicatas
    cardContainer.innerHTML = "";

    // Carrega os dados do JSON apenas se ainda não foram carregados
    if (dados.length === 0) {
        let resposta = await fetch("data.json"); //o fetch vai trazer os dados do local
        dados = await resposta.json();
    }

    // Filtra os dados com base no termo de busca (no nome ou na descrição)
    const dadosFiltrados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoBusca) ||
        dado.descricao.toLowerCase().includes(termoBusca)
    );

    redenrizarCards(dadosFiltrados);
}

function redenrizarCards(dados) {
    for (let dado of dados) {
        const article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.ano}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);
    }
=======
const cardContainer = document.querySelector(".card-container");
const inputBusca = document.querySelector('header div input');
let dados = [];

async function iniciarBusca() {
    // Pega o valor do input e converte para minúsculas para busca case-insensitive
    const termoBusca = inputBusca.value.toLowerCase();

    // Limpa o container antes de renderizar novos cards para evitar duplicatas
    cardContainer.innerHTML = "";

    // Carrega os dados do JSON apenas se ainda não foram carregados
    if (dados.length === 0) {
        let resposta = await fetch("data.json"); //o fetch vai trazer os dados do local
        dados = await resposta.json();
    }

    // Filtra os dados com base no termo de busca (no nome ou na descrição)
    const dadosFiltrados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoBusca) ||
        dado.descricao.toLowerCase().includes(termoBusca)
    );

    redenrizarCards(dadosFiltrados);
}

function redenrizarCards(dados) {
    for (let dado of dados) {
        const article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.ano}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);
    }
>>>>>>> c80496277bb503692d8ca01793dfc7cede626b86
}