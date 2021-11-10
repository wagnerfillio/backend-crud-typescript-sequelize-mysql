import { DataTypes } from 'sequelize';
import { db } from '../db';

const colunas = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}

const options = {
    freezeTableName: true,
    tableName: 'usuarios',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}

export const userModel = db.define('usuarios', colunas, options)