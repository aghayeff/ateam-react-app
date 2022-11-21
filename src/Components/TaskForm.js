import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const TaskForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	sp: Yup.number()
	.positive("Invalid sp number")
	.integer("Invalid sp number")
	.required("Required")
});

return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<Field name="name" type="text" placeholder="Name"
				className="form-control" />
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="sp" type="number" placeholder="Story Point"
				className="form-control" />
			<ErrorMessage
			name="sp"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="status" type="hidden"/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default TaskForm;
