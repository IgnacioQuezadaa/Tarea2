var aws = require('aws-sdk');
aws.config.update({region:'us-east-2'});

var docClient = new aws.DynamoDB.DocumentClient({region:'us-east-2'});
exports.handler =  (e,ctx,callback) => {


var params = {
    TableName:"Productos",
    Key:{
        id:'3'
    },

};
console.log("Buscando el producto deseado...");

docClient.get(params,function(err,data){
        if(err){
            callback(err,null);
            
        }else{
            
            
            
            callback(null,data);
        }
        
    })
        
};
