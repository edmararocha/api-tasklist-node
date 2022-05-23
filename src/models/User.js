import database from '../configDB.js';

const users = database.connection.define('users', {
    id: {
        type: database.sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: database.sequelize.STRING
    },  

    email: {
        type: database.sequelize.STRING,
    },

    password: {
        type: database.sequelize.STRING
    }
});

// criar a tabela users

/* users.sync({
    force: true
}); */

export default users;