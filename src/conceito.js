/* 
    Função que verifica se uma pessoa pode ou não votar.
*/

function podeVotar(anoNascimento) {

    const anoAtual = 2021;

    const verificar = anoAtual - anoNascimento;

    if (verificar >= 18 && verificar < 70) {
        console.log('Pode votar !');
    }
    else if (verificar >= 16 && verificar <= 17) {
        console.log('Permitido apenas com titulo eleitoral regular.');
    }
    else {
        console.log('Verificar situação !');
    }
}

/* 
    Atribuindo data de nascimento para realização de cálculo se tal pessoa poderá votar.
*/
podeVotar(2000);


/* 
    Função que soma às contas de tal pessoa, e também recebe o salário desta, 
    fazendo cálculo que retorna o salário restante.
*/

function verificarRestante (pagamento, contaLuz, contaAgua, contaNet, contaProduto) {

    const resultadoConta = contaLuz + contaAgua + contaNet + contaProduto;
    console.log('Valor total da conta: ',resultadoConta);

    if (pagamento >= resultadoConta) {
        const restante = pagamento - resultadoConta;
        console.log('O valor restante é de : ',restante);
    }else {
        console.log('Não irá conseguir pagar suas contas.');
    }
}

/*
    Atribuindo valores de pagamento e de contas para realização de cálculo.
*/
verificarRestante(1420,90,85,150,725);


/*
    Criando os Array relacionado a Países.
*/

let paises = [
    'Argentina',
    'Brasil',
    'Espanha',
    'Estados Unidos',
    'Inglaterra',
    'França',
    'Uruguai',
    'China',
    'Japão'
];

/*
    Intuito aqui é retornar todos os valores através de um loop através do For,
    Podemos também, retornar valores especificos, não necessitando de um
    loop, atribundo dentro dos colchetes o índice.
*/
for (let count = 0; count < paises.length; count++) {
    console.log('Nome do país: ', paises[count]);
}

/*
    Criando outro Array com mesmo intuinto do anterior porém,
    desta vez com o While.
*/
let estados = [
    'Paraná',
    'Minas Gerais',
    'Santa Catarina',
    'Ceará',
    'Rio Grande do Sul',
    'Mato Grosso do Sul',
    'Rio de Janeiro',
    'São Paulo'
];

let indice = 0;
while (indice < estados.length) {
    console.log('Nome do estado: ', estados[indice]);
    indice++;
}

/*
    Este loop é bem menos utilizado, estaremos com mesmo intuito dos anteriores.
*/

let palavras = [
    'Beber',
    'Comer',
    'Dormir',
    'Descobrir',
    'Aprender'
];

let i = 0;
do {
    console.log(palavras[i]);
    i++;
} while (i < palavras.length);


/*
    Construindo um Switch Case, realiza comparação de tal palavra,
    se está exitir em um dos casos, irá retornar mensagem destinada.
*/

let pessoa;
pessoa = 'Estudante';
switch (pessoa) {
    case 'Medico': console.log('Ajuda pessoas.');
        break;
    case 'Professor': console.log('Ensina pessoas.');
        break;
    case 'Escritor': console.log('Aquele que faz um trabalho cientifíco, literário, etc.');
        break;
    case 'Estudante': console.log('Aquele que busca conhecimento.');
        break;
    default: console.log('Não consta no case.');
        break;
}


/*  
    Criando mais um array...
*/

let livros = [
    'Dom Quixote',
    'Guerra e Paz',
    'A Montanha Mágica',
    'Ulisses',
    'Em Busca do Tempo Perdido',
    'O Som e a Fúria'
];

/*
    Utilizando o For In para retornar valores, está é uma maneira
    mais simplificada e propícia para retorno de valores de um
    Array
*/

for (let books in livros) {
    console.log(livros[books]);
}

/*
    Criando outro Array...
*/

let grandesPessoas = [
    'Marie Curie',
    'Ada Lovelace',
    'Harriet Tubman',
    'Kwame Nkrumah',
    'Albert Einstein'
];

/*
    Retornando os valores com a maneira mais simples possível,
    tanto o For In, quanto o For of são mais destinados a Arrays.
*/

for (let person of grandesPessoas) {
    console.log(person);
}