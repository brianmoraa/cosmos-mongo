var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

const url = "mongodb://estudiantescosmosdb:mbsO3DZRDDX9Zabg2XubRk5WMgAHpsrqhavghP2C0er6EeMKl9WePAc5z4SbMnxOXVbeWhbUsTtleetH5iJD1w==@estudiantescosmosdb.documents.azure.com:10255/?ssl=true";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    
    if(err) { 
        return console.log(" ---> Error al conectar a MongoDB"); 
    }
    
    console.log(" ---> Conectado a MongoDB.");
    var db = client.db('meanstack');

    

    client.close();

});