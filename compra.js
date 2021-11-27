var AWS = require("aws-sdk");

var docClient = new AWS.DynamoDB.DocumentClient({region:'us-east-2'});
exports.handler =  (e,ctx,callback) => {

var id;
var Cantidad=100;
var Precioo=800;
var c=98;
var tipoProducto="Papas Lays 500 gr";



 var params = {
     
   Key:{                 
        id: "3",

     },
    TableName:'productos'
};

    docClient.get(params,function(err,data){
        if(err){
            callback(err,null);
            
        }else{
            
            callback(null,data);


            console.log("Compra Realizada , Disfruta Tus Productos!")
                          console.log("Quedan "+c+" Papas Lays Disponibles en Stock" )

        }
        
    })
    
console.log("Realizando la Compra de 2 Papas Lays...");








};