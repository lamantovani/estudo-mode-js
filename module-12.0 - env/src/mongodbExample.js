const Mongoose = require('mongoose')

Mongoose.connect('mongodb://admin:nimda@localhost:27017/admin',
    {useNewUrlParser: true}, function (error){
        if (!error) return ;
        console.log('Falha na conexão!', error)
    })

const connection = Mongoose.connection

// function nomeFuncao() {

// }

// const minhaFuncao = function () {

// }

// const minhaFuncaoArrow = () => {

// }

// const minhaFuncaoArrow = (params) => console.log(params)

connection.once('open', () => console.log('database rodando!!'))
// setTimeout(() =>{
//     const state = connection.readyState
//     console.log('State', state)
// }, 1000) 

/**
 * 0: Disconectado
 * 1: Conectado
 * 2: Conectando
 * 3: Desconectando
 */

const heroiSchema = new Mongoose.Schema({
    nome: {
        type: String,
        requires: true
    },
    poder: {
        type: String,
        required: true
    },
    insertedAt: {
        type: Date,
        deafult: new Date()
    }
})

const model  = Mongoose.model('herois', heroiSchema)

async function main() {
    const resultCadastrar = await model.create({
        nome: 'Batiman',
        poder: 'Dinheiro'
    })
    console.log('ResultCadastrar', resultCadastrar)

    const listItens = await model.find();
    console.log('items', listItens)
}

main();