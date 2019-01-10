let mongoClient=require('mongodb').MongoClient;
let dbname=process.argv[2];
mongoClient.connect('mongodb://127.0.0.1:27017/learnyoumongo',function(err,db){
	let collection=db.collection('parrots')
	
	collection.count({
      age : {$gt: +process.argv[2]}
    },function(err,res){
    	if(err) throw err;
    	console.log(res)
    	db.close();
    })
})

