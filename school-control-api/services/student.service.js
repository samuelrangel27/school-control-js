import db from "../db/index.js";

export const getAllStudents = async () => { 
	// const data = await Student.find();
	
	console.log(db.models);
	const data = db.models.student.findAll();


	return data;
}