var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://127.0.0.1:27017/learnyoumongo', function(err, db) {
// db gives access to the database
var collection = db.collection('parrots');
collection.find({
age : {$gt: +process.argv[2]}
},{name:1,
	age:1,
	_id:0}).toArray(function(err, docs){
console.log(docs);
db.close();
})
})