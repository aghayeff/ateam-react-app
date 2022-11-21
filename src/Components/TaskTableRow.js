import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Field } from "formik";

const TaskTableRow = (props , checked) => {
	console.log(props)
const { _id, name, sp, status } = props.obj;

const deleteTask = () => {
	axios
	.delete(
"http://localhost:4000/tasks/delete-task/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Task successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>
		<input name="status[]" type="checkbox" onChange={(e)=>props.checked(e.target.checked , _id)} />
	</td>
	<td>{name}</td>
	<td>{sp}</td>
	<td>
		<span className={`text text-${!status ? 'danger':'success'}`}>
			<b>{!status ? 'Not Completed':'Completed'}</b>
		</span>
	</td>
	<td>
		<Button onClick={deleteTask}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default TaskTableRow;
