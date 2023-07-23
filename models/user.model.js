import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },    
    firstName: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Por favor debe ingresar un nombre.'
            }
        }
    },
    lastName:{
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Por favor debe ingresar un apellido.'
            }
        }
    },
    email: {
        type: DataTypes.STRING(70),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Email no cumple con el formato requerido (ejemplo@dominio.com)."
            },
            notNull: {
                msg: 'Por favor debe ingresar un email.'
            }
        }
    }
},{
    tableName: 'users'    
});

export {
    User
}

/*await sequelize.sync({ force: true, alter: true });*/