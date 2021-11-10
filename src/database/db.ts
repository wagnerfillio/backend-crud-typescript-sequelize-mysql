import { Sequelize } from 'sequelize';

export const db = new Sequelize(
    'crud-ts',
    'root',
    'vertrigo',
    {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        define: {
            timestamps: true,
            underscored: true,
        }
    }
);