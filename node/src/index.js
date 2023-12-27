import app from "./app.js";
import { sequelize } from "./database/database.js";
import {PORT} from "./config.js"

import "../src/models/Project.js"
// import "../src/models/Task.js"


async function main() {
  await sequelize.sync({force: true});
  app.listen(PORT);
  console.log("Server on port 4000");
}

main();