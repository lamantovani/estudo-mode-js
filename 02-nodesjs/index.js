/**
 * 0 Obter um usuário
 * 1 Obter o numero de telefone de um usuário a partir de seu Id
 * 2 Obter o endereco do usuário pelo Id
 */
// importamos um módulo interno do node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

 function obterUsuario() {
     // quando der algum problema -> reject(ERRO)
     // quando sucess -> resolve(SUCCESS)
     return new Promise(function resolvePromesi(resolve, reject){
         setTimeout(() => {
             // return reject (new Error('DEU RUIM DE VERDADE!'));

             return resolve ({
                 id: 1,
                 nome: 'Aladin',
                 dataNascimento: new Date()
             })
         }, 1000);
     });

 }

 function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve ({
                numero: '12344534',
                ddd: 11
            })
        }, 2000);
    })
 }

 function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback (null, {
            endereco: 'Rua teste',
            numero: '11A',
            cidade: 'São Paulo',
            bairro: 'Lapa'
        })
    }, 2000);
 }

 // 1 - O passo adicionar a palavra async -> automaticamente ela retornará uma Promise
 main();
 async function main() {
    try {
        console.time('medida-promise');
        const usuario = await obterUsuario();
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEnderecoAsync(usuario.id);

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ]);

        const telefone = resultado[0];
        const endereco = resultado[1];

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd})${telefone.numero}
            Endereco: ${endereco.endereco}, ${endereco.numero}
        `);

        console.timeEnd('medida-promise');

    } catch (error) {
        console.error('DEU RUIM', error);
    } 

 }


//  const usuarioPromise = obterUsuario();
//  // para manipular o sucesso usamos a função .then
//  // para manipular erros, usamos o .catch
//  usuarioPromise
//     .then(function (usuario){
//         return obterTelefone(usuario.id)
//         .then(function resolverTelefone (result){
//             return {
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then(function (resultado) {
//         const endereco = obterEnderecoAsync(resultado.usuario.id);
//         return endereco.then(function resolveEndereco(result) {
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         });
//     })
//     .then(function (resultado) {
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Endereco: ${resultado.endereco.endereco}, ${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.numero}
//         `);
//     })
//     .catch(function (error){
//         console.error('DEU RUIM', error);
//     });


//  obterUsuario(function resolverUsuario(error, usuario) {
//     // null || "" || 0 === false
//     if (error) {
//         console.error('DEU RUIM EM USUARIO', error);
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(errorTelefone, telefone){
//         if (errorTelefone) {
//             console.error('DEU RUIM EM TELEFONE', errorTelefone);
//             return;
//         }
       
//         obterEndereco(usuario.id, function resolverEndereco(errorEndereco, endereco){
//             if (errorEndereco) {
//                 console.error('DEU RUIM EM USUARIO', errorEndereco);
//                 return;
//             }
//             console.log(`
//             Nome: ${usuario.nome},
//             Endereco: ${endereco.endereco}, número: ${endereco.numero}
//             Telefone: (${telefone.ddd})${telefone.numero}
//             `);
//         });
//     });


//  });

 // const telefone = obterTelefone(usuario.id);
 // const endereco = obterEndereco

 
//  console.log('telefone', telefone);