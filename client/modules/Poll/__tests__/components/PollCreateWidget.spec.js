import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { PollCreateWidget } from '../../components/PollCreateWidget/PollCreateWidget';
import { mount, shallow } from 'enzyme';

const props = {
  addPoll: () => {},
  showAddPoll: true,
};

test('renders properly', t => {
  const wrapper = shallow(
    <PollCreateWidget {...props} />
  );

  t.truthy(wrapper.hasClass('form'));
  t.truthy(wrapper.hasClass('appear'));
  t.truthy(wrapper.find('h2').first().containsMatchingElement('Add New Post'));
  t.is(wrapper.find('input').length, 2);
  t.is(wrapper.find('textarea').length, 1);
});

test('hide when showAddPoll is false', t => {
  const wrapper = mount(
    <PollCreateWidget {...props} />
  );

  wrapper.setProps({ showAddPoll: false });
  t.falsy(wrapper.hasClass('appear'));
});

test('has correct props', t => {
  const wrapper = mount(
    <PollCreateWidget {...props} />
  );

  t.is(wrapper.prop('addPoll'), props.addPoll);
  t.is(wrapper.prop('showAddPoll'), props.showAddPoll);
});

test('calls addPoll', t => {
  const addPoll = sinon.spy();
  const wrapper = mount(
    <PollCreateWidget addPoll={addPoll} showAddPoll />
  );

  wrapper.ref('name').get(0).value = 'David';
  wrapper.ref('title').get(0).value = 'Some Title';
  wrapper.ref('content').get(0).value = 'Bla Bla Bla';

  wrapper.find('a').first().simulate('click');
  t.truthy(addPoll.calledOnce);
  t.truthy(addPoll.calledWith('David', 'Some Title', 'Bla Bla Bla'));
});

test('empty form doesn\'t call addPoll', t => {
  const addPoll = sinon.spy();
  const wrapper = mount(
    <PollCreateWidget addPoll={addPoll} showAddPoll />
  );

  wrapper.find('a').first().simulate('click');
  t.falsy(addPoll.called);
});
