import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import sequelizeConfig from '../lib/configs/database.config';

@Module({
    imports: [SequelizeModule.forRoot(sequelizeConfig)],
})
export class DatabaseModule { }
