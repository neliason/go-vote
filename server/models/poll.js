import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  name: { type: 'String', required: true, ref: 'User' },
  title: { type: 'String', required: true },
  choices: [{
    name: { type: 'String', required: true },
    votes: { type: 'Number', default: 0 },
  }],
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Poll', pollSchema);
