import { DataTypes } from "sequelize";

export const Student = (seq) => {
	seq.define('student', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING
		},
		address: {
			allowNull: false,
			type: DataTypes.STRING
		},
		dateOfBirth: {
			allowNull: false,
			type: DataTypes.DATE
		}
	}, {
		timestamps: false
	});
}