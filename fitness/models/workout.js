var mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  type: String,
  distance: Number,
  duration: Number,
  calories: Number
});  
// Add virtual field 'id' which equals '_id'.
WorkoutSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
WorkoutSchema.set('toObject', {
  virtuals: true
});

// Remove underscore prefix fields from output
WorkoutSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj._id;
  delete obj.__v;
  return obj;
}
module.exports = mongoose.model('workout', WorkoutSchema);

