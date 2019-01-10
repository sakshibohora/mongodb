let mongoClient=require('mongodb').MongoClient;
let dbname=process.argv[2];
mongoClient.connect('mongodb://127.0.0.1:27017/'+dbname,function(err,db){
	let collection=db.collection('users');
	 var myquery = {username :"tinatime"};
	 let newvalue={$set:{age:40}};
	 collection.update(myquery,newvalue,function(err,res){
	 	if(err) console.log(err);
	 	db.close();
	 })

})