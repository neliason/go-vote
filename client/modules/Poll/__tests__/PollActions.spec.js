import test from 'ava';
import { actionTest } from 'redux-ava';

import {
  ADD_POST,
  DELETE_POST,
  ADD_POSTS,
  addPoll,
  deletePoll,
  addPolls,
} from '../PollActions';

const poll = { name: 'Prashant', title: 'Hello Mern', cuid: 'f34gb2bh24b24b2', content: "All cats meow 'mern!'", slug: 'hello-mern', _id: 1 };

test('should return the correct type for addPoll', actionTest(
  addPoll,
  poll,
  { type: ADD_POST, poll },
));

test('should return the correct type for deletePoll', actionTest(
  deletePoll,
  poll.cuid,
  { type: DELETE_POST, cuid: poll.cuid },
));

test('should return the correct type for addPolls', actionTest(
  addPolls,
  [poll],
  { type: ADD_POSTS, polls: [poll] },
));
