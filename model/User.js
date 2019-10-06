const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

module.exports = class User
{
    constructor(username,password)
    {
        this.username = username;
        this.password = password;
    }
    save()
    {
        const db = getDb();
      return  db.collection('Users').insertOne(this)
        .then(result => 
            {
                console.log(result);
            })
        .catch(error => 
            {
                console.log(error);
            });
    }

    static findByID(prodID)
    {
        const db = getDb();
        return db.collection('Users').find({ _id : new mongodb.ObjectId(prodID)})
        .next()
        .then(product => { 
            console.log(product)
            return product;            
             })
        .catch(error => {
            console.log(error);
        })
        
    }

   static fetchAllUsers()
    {
        const db = getDb();
        return db.collection('Users').find()
        .toArray()
        .then(users => {
            console.log(users);
            return users;
        })
        .catch(error => {
            console.log(error);
        });
    }
}


