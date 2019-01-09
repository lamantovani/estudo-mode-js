const service = require('./service')

Array.prototype.meuMap = function (callback){
    const novoArrayMapeado = [];
    for (let indice = 0; indice <= this.length - 1; indice++) {
        const resultado = callback(this[indice], indice);
        novoArrayMapeado.push(resultado);
    }
    return novoArrayMapeado;
}

async function main(){
    try {
        const result = await service.obterPessoas(`a`);

        // const nomes = [];
        // result.results.forEach(function  (item) {
        //     nomes.push(item.name);
        // });

        // const nomes = result.results.map(function (pessoa) {
        //     return pessoa.name;
        // })

        // const nomes = result.results.map((pessoa) => pessoa.name)

        const nomes = result.results.meuMap(function (pessoa, indice) {
            return `[${indice}]${pessoa.name}`;
        });
        console.log(`nomes`, nomes);

    } catch (error) {
        
    }
}

main()