
const typeOrmConfig =
 {
    type: 'mariadb',
    host: 'localhost',
    port: Number( '3306'),
    username: 'root',
    password: '',
    database:  'stabox',
    "entities": ["apps/api/src/**/**.entity{.ts,.js}"],
 
    autoLoadEntities: true, //only in development mode
    synchronize: false,
    migrations: [
        'apps/api/src/database/migrations/*.js',
    ],
    cli: {
        migrationsDir: 'apps/api/src/database/migrations',
    },
}
module.exports = typeOrmConfig