import database from '../configDB.js';

const tasks = database.connection.define('tasks', {
    id: {
        type: database.sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: database.sequelize.STRING
    },  

    description: {
        type: database.sequelize.STRING
    },

    status: {
        type: database.sequelize.BOOLEAN,
    }
});

// criar a tabela tasks

/* tasks.sync({
    force: true
}); */

export default tasks;