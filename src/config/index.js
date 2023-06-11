const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports={
    PORT:8000,
    PROJ_COLL:process.env.PROJ_COLL,
    USERS_COLL:process.env.USERS_COLL,
    BOARD_COLL:process.env.BOARD_COLL,
    DB_ID:process.env.DB_ID,
    CARDS_COLL:process.env.CARDS_COLL
}