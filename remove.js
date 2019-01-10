let mongoClient=require('mongodb').MongoClient;
let dbname=process.argv[2];
mongoClient.connect('mongodb://127.0.0.1:27017/'+dbname,function(err,db){
	let collection=db.collection(process.argv[3])

	 collection.remove({
      _id: process.argv[4]
    },function(err,res){
    	if(err) throw err;
    	db.close();
    })
})

