const express=require("express");
const bodyParser=require('body-parser');
const app= express();
const cors=require('cors')
const knex=require("knex")
app.use(bodyParser.json())


const postgres=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'test',
    database : 'executive'
  }
});



console.log(postgres.select('*').from('users'));
app.use(cors())


app.get('/',(req,res)=>{
	res.send(postgres.users);
})



app.post("/signin",(req,res)=>{
	postgres.select('email','staffno').from("login")
	.where('email','=',req.body.email)
	.then(data=>{
		if (req.body.password===data[0].staffno){
			postgres.select("*").from('users').where('email','=',req.body.email)
			.then(user=>{
				console.log(user)
				res.json(user[0])
			})
			.catch(err=>res.status(400).json("unable to get the user"))
		} else{
			res.status(400).json("Wrong id or password")

		}
		
			})
	 .catch(err=>res.status(400).json('wrong credentias'))
})
app.post("/form",(req,res)=>{
// 	postgres.select('userid').from("data")
// 	.where('userid',"=",req.body.userid)
// 	.then(data=>{
		
			// postgres("data").insert({description:this.state.data.description},{educationneeds:this.state.data.educationneeds},{edugaps:this.state.data.edugaps},
			// 	{gapsinpersonalcommitment:this.state.data.gapsinpersonalcommitment},{gapsinpersonalcustomerorientation:this.state.data.gapsinpersonalcustomerorientation},
			// 	 {gapsinpersonalinitiative:this.state.data.gapsinpersonalinitiative },{gapsinpersonalskill:this.state.data.gapsinpersonalskill} ,
			// 	 {gapsinpersonalteamcollaboration:this.state.data.gapsinpersonalteamcollaboration},{gapsintechnicalskillsas:this.state.data.gapsintechnicalskillsas},
			// 	 {gapsintechnicalskillscounterfeit:this.state.data.gapsintechnicalskillscounterfeit} ,{gapsintechnicalskillsems:this.state.data.gapsintechnicalskillsems},
			// 	 {gapsintechnicalskillssap:this.state.data.gapsintechnicalskillssap} ,{personalcommitment:this.state.data.personalcommitment},{personalcustomerorientation:this.state.data.personalcustomerorientation},
			// 	 {personalinitiative:this.state.data.personalinitiative}, {personalskill:this.state.data.personalskill},{personalteamcollab:this.state.data.personalteamcollab}, 
			// 	 {technicalas:this.state.data.technicalas},{technicalems:this.state.data.technicalems} , {technicalsap:this.state.data.technicalsap} , {technicalcounterfeit:this.state.data.technicalcounterfeit})



		
		
		
			
		
	// })
	console.log(req.body.data)
	postgres("data").insert({description:req.body.data.description,educationalqualification:req.body.data.educationalQualification,educationneeds:req.body.data.educationNeeds,edugaps:req.body.data.edugaps,
				gapsinpersonalcommitment:req.body.data.gapsInPersonalCommitment,gapsinpersonalcustomerorientation:req.body.data.gapsInPersonalCustomerOrientation,
				 gapsinpersonalinitiative:req.body.data.gapsInPersonalInitiative ,gapsinpersonalskill:req.body.data.gapsInPersonalSkill ,
				 gapsinpersonalteamcollaboration:req.body.data.gapsInPersonalTeamCollaboration,gapsintechnicalskillsas:req.body.data.gapsInTechnicalSkillsAS,
				 gapsintechnicalskillscounterfeit:req.body.data.gapsInTechnicalSkillsCounterfeit ,gapsintechnicalskillsems:req.body.data.gapsInTechnicalSkillsEMS,
				 gapsintechnicalskillssap:req.body.data.gapsInTechnicalSkillsSAP ,personalcommitment:req.body.data.personalCommitment,personalcustomerorientation:req.body.data.personalCustomerOrientation,
				 personalinitiative:req.body.data.personalInitiative, personalskill:req.body.data.personalSkill,personalteamcollab:req.body.data.personalTeamCollab, 
				 technicalas:req.body.data.technicalAS,technicalems:req.body.data.technicalEMS , technicalsap:req.body.data.technicalSAP , technicalcounterfeit:req.body.data.technicalcounterfeit}).catch(function(e){
				 	console.log(e)});


// postgres("data").insert({description:"3",educationneeds:"mkkm",edugaps:"hbhj",
// 				gapsinpersonalcommitment:"h",gapsinpersonalcustomerorientation:"dkjcsd",
// 				 gapsinpersonalinitiative:"dsjc" ,gapsinpersonalskill:"dshb",
// 				 gapsinpersonalteamcollaboration:"jdncj",gapsintechnicalskillsas:"djsncj",
// 				 gapsintechnicalskillscounterfeit:"dsjn" ,gapsintechnicalskillsems:"dcn",
// 				 gapsintechnicalskillssap:"dsjcj",personalcommitment:"dslc",personalcustomerorientation:"kdlkm",
// 				 personalinitiative:"dsjnc", personalskill:"sdkj",personalteamcollab:"jsc", 
// 				 technicalas:"kjdsc",technicalems:"ds" , technicalsap:"dsj" , technicalcounterfeit:"dsjnc",userid:"1"}).catch(function(e){
// 				 	console.log(e);
// 				 })



})









app.listen(3000,()=>{
	console.log("app is running in port 3000")
})





/* 
signin -->post
put -to fill in the database
/profile/:userid-->get
*/
