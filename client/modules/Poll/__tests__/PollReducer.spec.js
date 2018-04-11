import test from 'ava';
import { reducerTest } from 'redux-ava';
import pollReducer, { getPoll, getPolls } from '../PollReducer';
import { addPoll, deletePoll, addPolls } from '../PollActions';

test('action for ADD_POST is working', reducerTest(
  pollReducer,
  { data: ['foo'] },
  addPoll({
    name: 'prank',
    title: 'first poll',
    content: 'Hello world!',
    _id: null,
    cuid: null,
    slug: 'first-poll',
  }),
  { data: [{
    name: 'prank',
    title: 'first poll',
    content: 'Hello world!',
    _id: null,
    cuid: null,
    slug: 'first-poll',
  }, 'foo'] },
));

test('action for DELETE_POST is working', reducerTest(
  pollReducer,
  { data: [{
    name: 'prank',
    title: 'first poll',
    content: 'Hello world!',
    cuid: 'abc',
    _id: 1,
    slug: 'first-poll',
  }] },
  deletePoll('abc'),
  { data: [] },
));

test('action for ADD_POSTS is working', reducerTest(
  pollReducer,
  { data: [] },
  addPolls([
    {
      name: 'prank',
      title: 'first poll',
      content: 'Hello world!',
      _id: null,
      cuid: null,
      slug: 'first-poll',
    },
  ]),
  { data: [{
    name: 'prank',
    title: 'first poll',
    content: 'Hello world!',
    _id: null,
    cuid: null,
    slug: 'first-poll',
  }] },
));

test('getPolls selector', t => {
  t.deepEqual(
    getPolls({
      polls: { data: ['foo'] },
    }),
    ['foo']
  );
});

test('getPoll selector', t => {
  t.deepEqual(
    getPoll({
      polls: { data: [{ cuid: '123' }] },
    }, '123'),
    { cuid: '123' }
  );
});

