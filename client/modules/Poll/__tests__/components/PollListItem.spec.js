import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import PollListItem from '../../components/PollListItem/PollListItem';
import { mount, shallow } from 'enzyme';

const poll = { name: 'Prashant', title: 'Hello Mern', slug: 'hello-mern', cuid: 'f34gb2bh24b24b2', content: "All cats meow 'mern!'" };
const props = {
  poll,
  onDelete: () => {},
};

test('renders properly', t => {
  const wrapper = shallow(
    <PollListItem {...props} />
  );

  t.truthy(wrapper.hasClass('single-poll'));
  t.is(wrapper.find('Link').first().prop('children'), poll.title);
  t.regex(wrapper.find('.author-name').first().text(), new RegExp(poll.name));
  t.is(wrapper.find('.poll-desc').first().text(), poll.content);
});

test('has correct props', t => {
  const wrapper = mount(
    <PollListItem {...props} />
  );

  t.deepEqual(wrapper.prop('poll'), props.poll);
  t.is(wrapper.prop('onClick'), props.onClick);
  t.is(wrapper.prop('onDelete'), props.onDelete);
});

test('calls onDelete', t => {
  const onDelete = sinon.spy();
  const wrapper = shallow(
    <PollListItem poll={poll} onDelete={onDelete} />
  );

  wrapper.find('.poll-action > a').first().simulate('click');
  t.truthy(onDelete.calledOnce);
});
