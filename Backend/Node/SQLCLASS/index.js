
const { faker }=require ('@faker-js/faker');
const mysql = require('mysql2');
const express=require('express');
const app=express();
const path=require('path');
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); // parse form data

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Admin@123',
    database:'delta_app'
});

let getRandomUser=()=>{
    return [
       faker.string.uuid(),
       faker.internet.userName(),
       faker.internet.email(),
       faker.internet.password(),
     
    ];
  }
   
  app.listen('8080',(req,res)=>{
    console.log("listening on port 8080");
  })

  //Fetch and show total number of user on your app
  app.get('/',(req,res)=>{
    let q=`SELECT count(*) AS count from user`;
    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            let count=(result[0].count);
            res.render("Home",{count});
            
        })}catch(err){
            console.log(err); 
        }
  })

  // FETCH AND SHOW ID NAME EMAIL OF ALL USER
  app.get("/user",(req,res)=>{
    const q='SELECT *FROM user';
    try{
    connection.query(q,(err,result)=>{
        if(err)throw err;
        res.render('users',{result});
    })}catch(err){
        console.log(err);
    }
    })

// Edit form
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
     let q=`SELECT *FROM user WHERE id='${id}'`;
     try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            // console.log(result);
            let user=result[0];
            res.render("edit.ejs",{user});
        })}catch(err){
            console.log(err);
        }   
})

// Update (db) Route
app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {password:formpass,username:newUsername}=req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
    connection.query(q,(err,result)=>{
        if(err)throw err;
            let user=result[0];
            // console.log(`Form Password: '${formpass}'`);
            // console.log(`Database Password: '${user.password}'`);
            
        if(formpass !=user.password){
            res.send("WRONG PASSWORD! CAN'T UPDATE");
        }
        else{
            let q2 = `UPDATE user SET name='${newUsername}' WHERE id='${id}'`;
            connection.query(q2,(err,result)=>{
                if(err)throw err;
                res.redirect("/user");
            })
        }
    })
    }catch(err){
        console.log(err);
        res.send("some error occure in DB");
    }
});

// Add new user
app.get("/user/new",(req,res)=>{
    res.render('new.ejs')
  })

app.get("/user/new",(req,res)=>{
    let {userName,email,password}=req.body;
    let id=uuidv4();
    let q=`Insert into user(id,name,email,password) VALUES ('${id}','${username}','${email}','${password}')`;
    
    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            console.log("user added");
            res.redirect('/user');            
        })
    }catch(err){
        console.log("some error has been occured");

    }
})

//getting user to Delete  from database

app.get("/user/:id/delete",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT *FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            let user =result[0];
            res.render("delete.ejs",{user});
        })
    }catch(err){
        console.log("some error has been occured in deletion");
    }  
})

//Delete user from database
app.delete("/user/:id/",(req,res)=>{
    let {id}=req.params;
    let{password}=req.body;
    let q=(`SELECT *FROM user WHERE id='${id}'`);
    try{
    connection.query(q,(err,result)=>{
        if(err)throw err;
        let user=result[0];

        if(user.password!=password)
            res.send("Wrong password entered");
        else{
            let q2=`DELETE FROM user WHERE id='${id}'`;
            try{
                connection.query(q2,(err,result)=>{
                    if(err)throw err;
                    else {
                        console.log(result);
                        console.log("deleted!");
                        res.redirect("/user");
                      }
                })
            }catch(err){
                console.log("error");
            }
        }
    })}catch(err){
        console.log("error");
    }
})


// ***********PUSH BULK DATA IN DB*************
//  let q = "INSERT INTO user (id, name, email, password) VALUES ?";
// let data=[]
//     for( i=1;i<=100;i++){
//         data.push(getRandomUser());
//     }