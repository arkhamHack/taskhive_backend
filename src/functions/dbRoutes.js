const sdk= require( 'node-appwrite')
const {PROJ_COLL,COMMENT_COLL,CARDS_COLL,BOARD_COLL,DB_ID,USERS_COLL,APPWRITE_KEY,APPWRITE_PROJ_ID }=process.env;

module.exports=(router)=>{
const client=new sdk.Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(APPWRITE_PROJ_ID)
  .setKey(APPWRITE_KEY);

const database=new sdk.Databases(client)
router.post('/createProj',async(req,res)=>{
try{
  console.log(PROJ_COLL);
const proj=await database.createDocument(DB_ID,PROJ_COLL,sdk.ID.unique(),req.body);
res.status(201).json({
    message: 'Project was successfully created',
    proj,
  });
} catch (error) {
  console.error('Error while creating project:', error);
  res.status(500).json({
    error: 'Failed to create new project',
  });
}
});

router.post('/createBoard',async(req,res)=>{
    try{
    const board=await database.createDocument(DB_ID,BOARD_COLL,ID.unique(),req.body);
    res.status(201).json({
        message: 'Board was successfully created',
        board,
      });
    const update_proj=await database.updateDocument(DB_ID,CO)
    } catch (error) {
      console.error('Error while creating board:', error);
      res.status(500).json({
        error: 'Failed to create new board',
      });
    }
    });
router.post('/createCard',async(req,res)=>{
        try{
        const card=await database.createDocument(DB_ID,CARDS_COLL,ID.unique(),req.body);
        res.status(201).json({
            message: 'Card was successfully created',
            card,
          });
        } catch (error) {
          console.error('Error while creating card:', error);
          res.status(500).json({
            error: 'Failed to create new card',
          });
        }
        });
}