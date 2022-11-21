// CreateTask Component for add new task

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import TaskForm from "./TaskForm";

// CreateTask Component
const CreateTask = () => {
const [formValues, setFormValues] =
	useState({ name: '', sp: '', status: false })
// onSubmit handler
const onSubmit = taskObject => {
	axios.post(
'http://localhost:4000/tasks/create-task',taskObject)
	.then(res => {
		if (res.status === 200)
		window.location.replace('/task-list');
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return task form
return(
	<TaskForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Task
	</TaskForm>
)
}


export default CreateTask
