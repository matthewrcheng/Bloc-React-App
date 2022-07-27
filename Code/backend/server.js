//essentially importing the express module - need to run "npm install express"
const express = require('express');

//essentially creating an object of the class express()
const app = express();

//lets us make calls back to this server from different pages
const cors = require('cors');
app.use(cors());

//makes it so we can parse json info here
app.use(express.json());

//importing the stuff from the .env file - need to run "npm install dotenv --save"
require("dotenv").config();

//importing pg module (for postgres-node connect)
const db = require('./query');

var port = process.env.PORT || 6969;


//app.listen listens to the connections on the specified port/host.
//In this case we are listening on port 3001
app.listen(port, function(request, response){
    console.log(`Successfully connect to port ${port}!`);
})

//asynchronously runs the function while everything else is being done. 
//we await for the db to finish querying to store it in results
//returns all clubs in clubs table
app.get('/api/data', async function(req,res){
    const results = await db.query("select * from clubs");
    console.log(results);    
    res.json({
        data: results.rows,
    })
})

//returning specific club in clubs table
app.get('/api/data/:id', async function(req,res){
    const club_id = req.params.id;
    const results = await db.query("select * from clubs where club_id = $1",[club_id]);
    console.log(results);
    res.json({
        data: results.rows,
    })
})

//returning all users in users table
app.get('/api/data/users', async (_,res) => {
    const results = await db.query("select * from users");
    res.json({
        data: results.rows
    })
})


//returning an individual user from users table
app.get('/api/data/users/:id', async (req,res) => {
    const user_id = req.params.id;
    console.log("user id: ", user_id);
    const results = await db.query("select * from users where user_id = $1",[user_id]);
    res.json({
        data: results.rows
    })
})

//returning whether a user exists or not from users table
app.get('/api/data/users/:email/:password', async (req,res) => {
    const email = req.params.email;
    const pass = req.params.password;
    console.log("email: ", email);
    console.log("pass: ", pass);
    try{
        const results = await db.query("select * from users where email =$1 and password = $2",[email,pass]);
        //checking if there are no results (true if no results, false if results)
        console.log("No matching login credentials? ", !results.rows.length);
        if(results.rows.length !=0){
            res.json({
                notFound: !results.rows.length,
                userId: results.rows[0].user_id,
            });
        }else{
            res.json({
                notFound: !results.rows.length,
            });
        }
    }catch (error){
        console.log("error found... ",error);
    }
    
})

//returning specfic users clubs from userClubs
app.get('/api/data/users/user/:id/clubs', async (req,res) => {
    const user_id = req.params.id;
    console.log("user id: ", user_id);
    const results = await db.query("select * from userClubs inner join clubs on userClubs.club_id=clubs.club_id where user_id = $1",[user_id]);
    console.log("checking individual users clubs results", results);
    res.json({
        data: results.rows
    })
})


//adding club to a user to userClubs
app.post('/api/data/users/:id/addClub/:clubId', async (req,res) => {
    const data = req.params;
    console.log(req.body);
    try{
        console.log("adding club", data);
        const insert = await db.query("insert into userClubs(user_id, club_id) values($1,$2)  returning *",[data.id,data.clubId]);
        res.json({
            data:insert.rows[0]
        })
    }catch(err){
        console.log("Error: ", err);
    }
});

//returning whether a specific club exists for a specific user in userClubs
app.get('/api/data/users/user/:id/clubs/:clubId', async (req,res) => {
    const user_id = req.params.id;
    const club_id = req.params.clubId;
    const results = await db.query("select * from userClubs where user_id = $1 and club_id=$2",[user_id,club_id]);
    console.log("does club exist in userClubs for user?", results.rows);
    res.json({
        data: results.rows.length
    })
})

//deleting a specific club for a specific user in userClubs
app.delete('/api/data/users/user/:id/clubs/:clubId', async (req,res)=>{
    try{
        const club_id = req.params.clubId;
        console.log("attempting to delete club id", club_id, " from userClubs")
        const deleting = await db.query("delete from userClubs where club_id = $1 returning *",[club_id]);
        res.json({
            data: deleting.rows[0]
        })
    }catch(err){
        console.log("Error: ", err);
    }
});
