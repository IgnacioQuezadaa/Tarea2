'use.strict';
const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient({region:'us-east-2'});
exports.handler =  (e,ctx,callback) => {
    
    var disponibles=100;
    var p=800;
    
    
    var params = {
        TableName:"Productos"
        
        
    };
      console.log("Inventario Completo!")
        console.log("Papas Fritas Lays 500gr")
        console.log("Cantidad Disponible : " ,disponibles)
        console.log("Precio : ",p)
        
        console.log("Helado Centella")
        console.log("Cantidad Disponible : " ,disponibles+150)
        console.log("Precio : ",p-300)
            
            
        console.log("Gaseosa Coca Cola 500ml")
        console.log("Cantidad Disponible : " ,disponibles)
        console.log("Precio : ",p)
            
            

    docClient.scan(params,function(err,data){
        if(err){
            callback(err,null);
            
        }else{
            
            
            
            callback(null,data);
        }
        
    });

};