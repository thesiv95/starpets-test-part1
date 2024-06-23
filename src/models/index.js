import { Umzug, SequelizeStorage } from "umzug";
import path from 'path';
import sequelize from "../../db.config.js";
import User from "./User.model.js";

const BALANCE = 10000;

const umzug = new Umzug({
  migrations: {
    glob: [
      "migrations/*.js",
      {
        cwd: path.dirname(''),
      },
    ],
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

const dbInit = async () => {
    try {
        console.log('[DB] Syncing...');
        await sequelize.sync();
        
        console.log('[DB] Migration is up...');
        await umzug.up({step: 0});
        
        await User.create({ balance: BALANCE });

        process.on('SIGINT', () => umzug.down())

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default dbInit;
