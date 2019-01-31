const assert = require('assert')
const api = require('../api')
const Context = require('./../db/strategies/base/contextStrategy')
const Postgres = require('./../db/strategies/postgres/postgres')
const UsuarioSchema = require('./../db/strategies/postgres/schemas/usuarioSchema')
let app = {}

const USER = {
    username: 'Xuxadasilva',
    password: '123'
}

const USER_DB = {
    username: USER.username.toLowerCase(),
    password: '$2b$04$H3hIg39ttAdehPSGKGEejO3s7lyPA7O9do6ARmpY.zzNdGDiTFuvC'
}

describe('Auth test suite', function () {
    this.beforeAll(async () => {
        app = await api

        const connectationPostgres = await Postgres.connect()
        const model = await Postgres.defineModel(connectationPostgres, UsuarioSchema)
        const postegres = new Context(new Postgres(connectationPostgres, model))
        await postegres.update(null, USER_DB, true)
    })

    it('deve obter um token', async () => {

        const result = await app.inject({
            method: 'POST',
            url: '/login',
            payload: USER
        })

        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.deepEqual(statusCode, 200)
        assert.ok(dados.token.length > 10)

    })

    it('deve retornar não autorizado ao obter um login errado', async () => {
        const result = await app.inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: 'lamantovani', 
                password: '1234'
            }
        })

        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.deepEqual(statusCode, 401)
        assert.deepEqual(dados.error, "Unauthorized")
    })

})