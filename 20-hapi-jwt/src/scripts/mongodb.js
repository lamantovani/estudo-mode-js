// docker ps 
// docker exec -it 900e29d68ed3 / 
//     mongo -u admin -p nimda --authenticationDatabase herois

// mudando o contexto para uma database, caso não esxistir ele cria.
//use herois;

// mostra tabelas (coleções)
//show collections;

db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '28/09/1985'
})

db.herois.find()
db.herois.find().pretty()

for (let i = 0; i <= 10000; i++) {
    db.herois.insert({
        nome: `Cloen-${i}`,
        poder: 'Velocidade',
        dataNascimento: '28/09/1985'
    })
}


db.herois.count()
db.herois.findOne()
db.herois.find().limit(100).sort({nome: -1})
db.herois.find({}, { poder: 1, _id: 0})

// create
db.herois.insert({
    nome: `Cloen-${i}`,
    poder: 'Velocidade',
    dataNascimento: '28/09/1985'
})

// read
db.herois.find()
db.herois.find({nome: 'Mulher Maravilha'})

// update
db.herois.update({_id: ObjectId("5c45d46195c7675c1e1d1133")}, 
                    {nome: 'Mulher Maravilha'})

db.herois.update({_id: ObjectId("5c45d56195c7675c1e1d3839")}, 
                    { $set: {nome: 'Lanterna Verde'} })

db.herois.update({poder: 'Velocidade'}, 
                    { $set: {poder: 'super força'} })

// delete
db.herois.remove({})
db.herois.remove({nome: 'Mulher Maravilha'})

// Permite executar comando dentro de um determinado container do docker
//docker exec -it <nomde_do_container>  bash

//Comando para se conectar com o mongodb a partir de um terminal
//mongo -u <user> -p <password> localhost:27017/admin