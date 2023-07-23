import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";
import { User } from '../models/user.model.js';
import { Bootcamp } from '../models/bootcamp.model.js';

const UserBootcamp = sequelize.define('user_bootcamp', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    tableName: 'user_bootcamp',    
});

User.hasMany(UserBootcamp, {
    foreignKey: 'id_user',
    sourceKey: 'id'
});

UserBootcamp.belongsTo(User, {
    foreignKey: 'id_user',
    targetKey: 'id'
});

Bootcamp.hasMany(UserBootcamp, {
    foreignKey: 'id_bootcamp',
    sourceKey: 'id'
});

UserBootcamp.belongsTo(Bootcamp, {
    foreignKey: 'id_bootcamp',
    targetKey: 'id'
});

export {
    UserBootcamp
}

/*UserBootcamp.sync();*/

