// user.model.ts

import { Model, Column, DataType, Table } from 'sequelize-typescript';

@Table({
    tableName: 'user',
    timestamps: true,
})
export class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.STRING)
    email: string;

    // Add more fields as needed

    // Define associations if needed
    // static associate(models: any) {
    //   this.hasMany(models.SomeOtherModel);
    // }
}
