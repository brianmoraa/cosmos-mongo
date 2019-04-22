var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

const url = "mongodb://estudiantescosmosdb:mbsO3DZRDDX9Zabg2XubRk5WMgAHpsrqhavghP2C0er6EeMKl9WePAc5z4SbMnxOXVbeWhbUsTtleetH5iJD1w==@estudiantescosmosdb.documents.azure.com:10255/?ssl=true";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    
    if(err) { 
        return console.log(" ---> Error al conectar a MongoDB"); 
    }
    
    console.log(" ---> Conectado a MongoDB.");
    var db = client.db('dbPersonas');

    /*//var cursor = db.collection('Persona').find({ $and : [{'Pais': 'Indonesia'},{'Comercio.Tarjeta':'visa'}]},{'Nombre':1, '_id':0, 'Pais': 1, 'Comercio.Moneda': 1});
    var cursor = db.collection('Persona').find({
        $and : [{'Pais':'Colombia'},{ 'Edad': {$gte : 50} }]
    })

    cursor.forEach(
        function(doc) { console.log('Nombre: ' + doc.Nombre + " - Edad: " + doc.Edad + " - Sueldo: " + doc.Empresa.Sueldo + ' - Estatus: ' + doc.Empresa.Status);},
        function(err) { 
            assert.equal(err, null); 
            return client.close(); 
        }
    );

    */

    var cursor = db.collection('Persona').find({ Edad:  })
    
    cursor.forEach(
        function(doc) { 
            console.log(doc);
        },
        function(err) { 
            assert.equal(err, null); 
            return client.close(); 
        }
    );

    client.close();

});