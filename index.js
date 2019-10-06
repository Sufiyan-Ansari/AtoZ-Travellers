const express = require('express');

const app = express();

const bodyparser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;

app.use(bodyparser.urlencoded({extended:true}));

const adminrouter = require('./routes/admin');

const port = process.env.PORT || 3000;

app.set('views','view');

app.set('view engine','ejs');

//'AtoZ' is base URL
app.use(adminrouter);

mongoConnect(()=>{
  //  console.log(client);
    app.listen(port,()=>
    {
        console.log(`Listening on Port ${port}`)
    });
});