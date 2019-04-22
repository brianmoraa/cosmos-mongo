var fs = require('fs');
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


const url = "mongodb://estudiantescosmosdb:mbsO3DZRDDX9Zabg2XubRk5WMgAHpsrqhavghP2C0er6EeMKl9WePAc5z4SbMnxOXVbeWhbUsTtleetH5iJD1w==@estudiantescosmosdb.documents.azure.com:10255/?ssl=true";

let documentosPersonas = require('./datasetpersonas.json')
        
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {

    if(err) { 
        return console.log(" ---> Error al conectar a CosmosDB"); 
    }

    console.log("---> Conectado a Cosmos DB")
    var db = client.db('dbPersonas');

//Insertar varios documentos en la coleccion especificada:

db.collection('Persona').insertMany(documentosPersonas, function(err, collection){

    if(err){
        console.log(err)
    }
    else{
        console.log("Insertados correctamente!!")
        client.close;
    }

});



});


