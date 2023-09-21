import { SequelizeModuleOptions } from '@nestjs/sequelize';
import config from '../../../config';
import { Dialect } from 'sequelize';

const sequelizeConfig: SequelizeModuleOptions = {
    dialect: config.mysql_dialect as Dialect,
    host: config.mysql_host,
    port: config.mysql_port,
    username: config.mysql_username,
    password: config.mysql_password,
    database: config.mysql_name,
    pool: {
        max: 20,   // Maximum number of connections in the pool
        min: 1,    // Minimum number of connections in the pool (at least one connection)
        idle: 10000, // Maximum time, in milliseconds, that a connection can be idle before being released
    },
    autoLoadModels: true, // Automatically load models from the models folder
    synchronize: false, // Set to true for development (creates tables)
    define: {
        timestamps: true
    }
};

export default sequelizeConfig;
