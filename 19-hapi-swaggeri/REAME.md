docker run \
    --name postgres\
    -e POSTGRES_USER=postgres \
    -e POSTGRES_PASSWORD=postgres \
    -e POSTGRES_DB=heroes \
    -e 5432:5432 \
    -d \
    postgres


## ----- ADMINER
    docker ps
    docker exec -it postigres /bin/bash

    docker run \
        --name adminer \
        -p 8080:8080 \
        --link postgress:postgress \
        -d \
        adminer


## ----- MONGODB
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=nimda \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

docker exec -it mongodb \
    mongo --host localhost -u admin -p nimda --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'admin', pwd: 'nimda',
    roles: [{role: 'readWrite', db: 'herois'}]})"
