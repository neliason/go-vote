import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const poll2Schema = new Schema({
  poster: { type: 'String', required: true },
  question: { type: 'String', required: true },
  options: [{
    option: { type: 'String', required: true },
    votes: { type: Number, required: true, default: 0 },
  }],
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Poll2', poll2Schema);
