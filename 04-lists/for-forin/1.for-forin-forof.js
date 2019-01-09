const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a');
        const nomes  = [];

        console.time('for');
        for (let i = 0; i < result.results.length; i++) {
            const pessoa = result.results[i];
            nomes.push(pessoa.name);
        }
        console.timeEnd('for');

        console.time('forin');
        for (const i in result.results) {
            if (result.results.hasOwnProperty(i)) {
                const pessoa = result.results[i];
                nomes.push(pessoa.name);
            }
        }
        console.timeEnd('forin');

        console.time('forof');
        for (const pessoa of result.results) {
            nomes.push(pessoa.name);
        }
        console.timeEnd('forof');

        console.log(`nomes`, nomes);

    } catch (error) {
        console.error(`error intermno`, error);
    }
}

main()