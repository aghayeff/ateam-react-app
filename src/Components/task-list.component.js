import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TaskTableRow from "./TaskTableRow";
import { Button } from "react-bootstrap";

const TaskList = () => {
const [tasks, setTasks] = useState([]);
const [selectedIds , setSelectedIds] = useState([]);
useEffect(() => {
	axios
	.get("http://localhost:4000/tasks/")
	.then(({ data }) => {
		setTasks(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const checked = (checked , id) =>{
	if(checked){
		setSelectedIds([...selectedIds , id])
	}
	else{
		setSelectedIds(selectedIds.filter(item => item !==id))
	}
}
	
const DataTable = () => {
	return tasks.map((res, i) => {
	return <TaskTableRow  checked={checked} obj={res} key={i} />;
	});
};
console.log(selectedIds)
// const SelectedIds = [];

const updateTasks = () => {
	axios
	.post(
"http://localhost:4000/tasks/update-statuses", {
	'ids': selectedIds
})
	.then((res) => {
		if (res.status === 200) {
		alert("Tasks successfully updated");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th></th>
			<th>Name</th>
			<th>Story Point</th>
			<th>Status</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
		<tfoot>
			<tr>
				<td colSpan="100%">
					<Button variant="success" size="lg"
						block="block" onClick={updateTasks}>
						Update status
					</Button>
				</td>
			</tr>
		</tfoot>
	</Table>
	</div>
);
};

export default TaskList;
