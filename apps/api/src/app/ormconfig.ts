import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import {
  addressEntity,
  exchangeDateEntity,
  packageEntity,
  recieverEntity,
  transactionEntity,
  userEntity,
  vehicleEntity,
  contactUsEntity,
} from '../Entities';

// You can load you .env file here synchronously using dotenv package (not installed here),
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// You can also make a singleton service that load and expose the .env file content.
// ...

// Check typeORM documentation for more information.
const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_HOST) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PWD || '123456',
  database: process.env.DB_NAME || 'stabox',
  entities: [
    userEntity,
    addressEntity,
    exchangeDateEntity,
    packageEntity,
    recieverEntity,
    vehicleEntity,
    transactionEntity,
    contactUsEntity,
  ],

  // We are using migrations, synchronize should be set to false.
  synchronize: true,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: false,
  logger: 'file',

  // allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  migrations: ['dist/src/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = config;
