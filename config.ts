import * as dotenv from 'dotenv';

dotenv.config();

export default {

    imagemaker_api_port: process.env.IMAGE_MAKER_API_PORT,

    mysql_name: process.env.DATABASE_MYSQL_NAME,
    mysql_host: process.env.DATABASE_MYSQL_HOST,
    mysql_port: +process.env.DATABASE_MYSQL_PORT,
    mysql_username: process.env.DATABASE_MYSQL_USERNAME,
    mysql_password: process.env.DATABASE_MYSQL_PASSWORD,
    mysql_dialect: process.env.DATABASE_MYSQL_DIALECT

}