const Users = require('../model/User');


exports.GetIndexPage = (req,res,next)=>{

  //  res.send('Main page');
  res.render('MainPage',{pageTitle:'Main Page'});
};

exports.PostUser = (req,res,next) =>
{
    const username = req.body.username;
    const password = req.body.password;
   // console.log(username , password);
    const User = new Users(username,password);
    User.save().then(result =>{
      console.log('User Created Successfully !');
      res.redirect('/');
    })
}

exports.GetUserList = (req,res,next) =>
{
  //  res.render('UserList',{pageTitle:'User List' , user : Users});
  Users.fetchAllUsers().then(users => {
    res.render('UserList',{pageTitle:'User List' , user : users});
  }).catch(error => {
    console.log(error);
  })
}

exports.getUser = (req,res,next) =>
{
    
}