import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

const Bootcamp = sequelize.define('Bootcamp', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true    
    },
    title:{
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Por favor debe ingresar un título.'
            }
        }
    },
    cue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            max: 20,                  // only allow values <= 23
            min: 5,
            notNull: {
                msg: 'Por favor debe ingresar un cue entre 5 y 20.'
            }     
        }
    },
    description:{
        type: DataTypes.STRING(300),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Por favor debe ingresar una descripción.'
            }
        }
    }    
},{
    tableName: 'bootcamps'    
});

export {
    Bootcamp
}    

/*await sequelize.sync({ force: true, alter: true });*/