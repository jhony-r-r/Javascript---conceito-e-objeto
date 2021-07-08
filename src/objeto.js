/*
    Criando um objeto e atribuindo valores.
*/

const carro = {
    marca: 'Fiat',
    ano: '1987',
    cor: 'vermelho'
};

/*
    Mostrando objeto
*/
console.log(carro);


/*
    Outro maneira de criar objetos utilizando o
    Factory Function
*/

function empresa(cnpj, nome, area) {
    return {
        cnpj,
        nome,
        area
    }
}

/*
    Dando vida ao objeto, atribuindo valores conforme parâmetros 
    declados ao objeto e mostrando objeto.
*/

const criarEmpresa = empresa(111222, 'nomeEmpresa', 'areaEmpresa');
console.log(criarEmpresa);


/*
    Outro maneira de criar objetos utilizando o
    Construct Function
*/

function Computador(placaMae, placaVideo, processador, memoriaRam, memoriaArmazenamento) {
    this.placaMae = placaVideo,
        this.placaVideo = placaVideo,
        this.processador = processador,
        this.memoriaRam = memoriaRam,
        this.memoriaArmazenamento = memoriaArmazenamento
}

/*
    Atribuindo os valores ao objeto, temos também aparição do New,
    sendo assim instanciado a classe e criando um novo objeto. 
*/

const criarComputador =
new Computador('nomePlacaMae', 
                            'nomePlacaVideo', 
                            'nomeProcessador', 
                            'nomeMemoriaRam', 
                            'nomeMemoriaArmazenamento');

/*
    Mostrando objetos.
*/                        

console.log(criarComputador);


/*
    Clonando objeto empresa
*/

/*
    O método assign tem intuito de copiar valores de propriedades,
    e recebe como parâmetros, primeiro o destino, segundo a origem.
*/

const objetoClonadoEmpresa = Object.assign( { } , criarEmpresa );
console.log(objetoClonadoEmpresa);


/*
    Clonando o objeto computador
*/

const objetoClonadoComputador = Object.assign( {  } , criarComputador );
console.log(objetoClonadoComputador);

