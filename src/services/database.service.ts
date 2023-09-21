// database.service.ts

import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import sequelizeConfig from '../lib/configs/database.config';
import * as models from '../lib/db/models/index';

@Injectable()
export class DatabaseService {
    constructor() { }

    sequelize = new Sequelize(sequelizeConfig);

    async checkConnection() {
        try {
            await this.sequelize.authenticate();
            console.log('Database connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    initializeModels() {
        console.log('model', Object.keys(models))
        this.sequelize.addModels(Object.keys(models).map(k => models[k]))
    }

}
