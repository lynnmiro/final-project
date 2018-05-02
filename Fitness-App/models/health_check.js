var mongoose = require('mongoose');


const WorkoutSchema = mongoose.Schema({
  sleep: Boolean,
  workout: Boolean,
  water: Boolean,
  veggies: Boolean,
  meditate: Boolean,
  phone: Boolean
});  
// // Add virtual field 'id' which equals '_id'.
// WorkoutSchema.virtual('id').get(function(){
//   return this._id.toHexString();
// });

// // Ensure virtual fields are serialised.
// WorkoutSchema.set('toObject', {
//   virtuals: true
// });

// // Remove underscore prefix fields from output
// WorkoutSchema.methods.toJSON = function() {
//   var obj = this.toObject();
//   delete obj._id;
//   delete obj.__v;
//   return obj;
// }
module.exports = mongoose.model('workout', WorkoutSchema);