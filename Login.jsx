const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const dbName="Marathe";
const cN='reg';
async function login(un,ps)
{
    const client=new MongoClient(url);
    try{
        await client.connect();
        const db=client.db(dbName);
        const c1=db.collection(cN);
        const user=await c1.findOne({uname:un});
        if(!user){
            console.log("user not found");
            return;
        }
        if(user.pass===ps)
        {
            console.log("Login successful");

        }else {
            console.log("incorrect password");
        }
    }catch(error)
    {
        console.log("Error while logging in",error);
    }
}
login('ram','imrd');
