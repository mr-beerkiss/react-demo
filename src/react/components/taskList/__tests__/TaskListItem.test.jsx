/* eslint-env jest */
import React from 'react'
import {shallow} from 'enzyme'
import TaskListItem from '../TaskListItem.jsx'
import styles from '../TaskListItem.css'

describe('<TaskListItem />', () => {
  it('snapshot: renders incomplete task', () => {
    const wrapper = shallow(
      <TaskListItem
        name='Task 1'
        complete={false}
        removed={false} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('snapshot: renders complete task', () => {
    const wrapper = shallow(
      <TaskListItem
        name='Task 1'
        complete
        removed={false} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('snapshot: renders deleted task', () => {
    const wrapper = shallow(
      <TaskListItem
        name='Task 1'
        complete
        removed />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('text onChange returns new task name value', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(
      <TaskListItem
        name='Task 1'
        complete={false}
        removed={false}
        onChange={mockFn} />
    )

    const input = wrapper.find(`.${styles.taskText}`)
    input.simulate('change', {target: {value: 'x'}})
    expect(mockFn.mock.calls[0]).toEqual(['x'])
  })

  it('checkbox onClick returns complete state', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(
      <TaskListItem
        name='Task 1'
        complete={false}
        removed={false}
        onComplete={mockFn} />
    )

    const input = wrapper.find(`.${styles.checkbox}`)
    input.simulate('click')
    expect(mockFn.mock.calls[0]).toEqual([true])
  })

  it('delete onClick triggers callback', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(
      <TaskListItem
        name='Task 1'
        complete={false}
        removed
        onRemove={mockFn} />
    )

    const input = wrapper.find(`.${styles.deleteIcon}`)
    input.simulate('click')
    expect(mockFn.mock.calls[0]).toEqual([])
  })
})
