const express=require("express");
const bodyParser=require('body-parser');
const app= express();
const cors=require('cors')
app.use(bodyParser.json())

app.use(cors())

const database={
	users:[
	{
		id:'123',
		name:'John',
		password:'123',
		email:'john@gmail.com'
	},
	{
		id:'1234',
		name:'Sally',
		password:'123',
		email:'sally@gmail.com'

	}
	]
}

app.get('/',(req,res)=>{
	res.send(database.users);
})

app.post('/signin',(req,res)=>{
	if(req.body.email===database.users[0].email && req.body.password===database.users[0].password){
		res.json("success");
	}else{
		res.status(400).json("error logging in")
	}
	
})










app.listen(3000,()=>{
	console.log("app is running in port 3000")
})





/* 
signin -->post
put -to fill in the database
/profile/:userid-->get
*/
