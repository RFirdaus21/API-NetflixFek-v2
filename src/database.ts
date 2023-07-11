import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('netflix', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
