import Sequelize from 'sequelize';
import {Connection} from '../Persistence/dbConnection';


const Practice = Connection.define('Practices',{
    Id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "id"
    },
    Name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: Sequelize.DataTypes.STRING
    }
})


export default Practice;