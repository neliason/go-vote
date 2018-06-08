import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  github: {
    id: String,
    displayName: String,
    username: String,
    publicRepos: Number,
  },
  pollsVotedOn: [String],
});

export default mongoose.model('User', userSchema);
