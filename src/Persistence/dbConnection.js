import {Sequelize} from 'sequelize';

export const Connection= new Sequelize('NodePractices','postgres','Techdba12',{
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        min: 0,
        max: 5,
        idle: 10000
    },
    logging: (sql)=> {
        console.log(sql)
    }
})
