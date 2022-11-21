const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
name: {
	type: String
},
sp: {
	type: Number
},
status: {
	type: Boolean,
	default: false
}
}, {
	collection: 'tasks'
})

module.exports = mongoose.model('Task', taskSchema)
