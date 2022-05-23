import Sequelize from 'sequelize';

const connection = new Sequelize('tasklist_Database', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres'
});

export default {connection: connection, sequelize: Sequelize};