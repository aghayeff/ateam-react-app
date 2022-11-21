let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Task Model
let taskSchema = require("../models/Task");

// CREATE Task
router.post("/create-task", (req, res, next) => {
taskSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Tasks
router.get("/", (req, res) => {
taskSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// Update Task statuses
router.post("/update-statuses", (req, res, next) => {
taskSchema.updateMany(
	{"_id": req.body.ids}, 
	{"$set":{"status": true}}, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});


// Delete Task
router.delete("/delete-task/:id",
(req, res, next) => {
taskSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
