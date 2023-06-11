const {Client,ID,Users,Account} = require('node-appwrite');
const {APPWRITE_KEY,APPWRITE_PROJ_ID }=process.env;



module.exports=(router)=>{
let client = new Client();
// let id = new sdk.ID(client);
let users = new Users(client);
let accounts=new Account(client)
client.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(APPWRITE_PROJ_ID)
.setKey(APPWRITE_KEY);
router.get('/',async(req,res)=>{
res.json({
  msg:"Hi"
})
});
router.post('/register',async(req,res)=>
    {
        try {
            const { email, password,name } = req.body;
            console.log(email+" "+password)
            const user=await users.create(ID.unique(),email,'+919111111113',password,name);

      
            res.status(201).json({
              message: 'User was successfully registered',
              user,
            });
          } catch (error) {
            console.error('Error while registering:', error);
            res.status(500).json({
              error: 'Failed to register user',
            });
          }
        });

     
}
