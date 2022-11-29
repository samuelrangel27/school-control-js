import { Sequelize } from 'sequelize';
import {Student} from './models';

const sequelize = new Sequelize('schooldb','sa','*strong123',{
	host: 'localhost',
	dialect: 'mssql',
	define: {
		timestamps: false
	}
});

const modelDefiners = [
	Student
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

export default sequelize;