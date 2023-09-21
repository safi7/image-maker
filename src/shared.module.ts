// shared.module.ts

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseService } from './services/database.service';
import sequelizeConfig from './lib/configs/database.config';

@Module({
    imports: [SequelizeModule.forRoot(sequelizeConfig)],
    providers: [DatabaseService],
    exports: [SequelizeModule, DatabaseService],
})
export class SharedModule { }
