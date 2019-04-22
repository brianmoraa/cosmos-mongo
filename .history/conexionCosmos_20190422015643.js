var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

//URL obtenido en el recurso CosmosDB en Azure
const url = "mongodb://estudiantescosmosdb:mbsO3DZRDDX9Zabg2XubRk5WMgAHpsrqhavghP2C0er6EeMKl9WePAc5z4SbMnxOXVbeWhbUsTtleetH5iJD1w==@estudiantescosmosdb.documents.azure.com:10255/?ssl=true";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {

    
    if(err) { 
        return console.log(" ---> Error al conectar a CosmosDB"); 
    }
    
    console.log(" ---> Conectado a Cosmos DB.");
    var db = client.db('dbPersonas');

    db.close();


});