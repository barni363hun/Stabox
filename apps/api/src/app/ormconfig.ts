import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import {
  addressEntity,
  exchangeDateEntity,
  packageEntity,
  recieverEntity,
  transactionEntity,
  userEntity,
  vehicleEntity,
} from '../Entities';

// You can load you .env file here synchronously using dotenv package (not installed here),
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// You can also make a singleton service that load and expose the .env file content.
// ...

// Check typeORM documentation for more information.
const ormconfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [
    userEntity,
    addressEntity,
    exchangeDateEntity,
    packageEntity,
    recieverEntity,
    vehicleEntity,
    transactionEntity,
  ],

  // We are using migrations, synchronize should be set to false.
  synchronize: process.env.TYPEORM_SYNCHRONIZE == 'true',

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: process.env.TYPEORM_LOGGING == 'true',
  logger: 'file',

  // allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  // migrations: ['dist/src/migrations/**/*{.ts,.js}'],
  // cli: {
  //   migrationsDir: 'src/migrations',
  // },
};

export = ormconfig;
