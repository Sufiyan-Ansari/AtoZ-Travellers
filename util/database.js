let _db;
const mongoConnect = (callback) =>
{
    const mongodb = require('mongodb');
    const mongoClient = mongodb.MongoClient;
    mongoClient.connect('mongodb+srv://Sufiyan:PzFq5JTTWyXnx8bv@atoz-6rvyg.mongodb.net/AtoZ-Travellers?retryWrites=true&w=majority',{ useNewUrlParser: true })
    .then(client => {
    console.log('Connected !!!');
    _db = client.db();
    callback();
         })
    .catch(error => {
    console.log(error);
    throw error;
                    });
};

const getDb = () =>
{
    if(_db)
    {
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;