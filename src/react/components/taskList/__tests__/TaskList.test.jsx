/* eslint-env jest */
import React from 'react'
import {shallow} from 'enzyme'
import TaskList from '../TaskList.jsx'
import styles from '../TaskList.css'

describe('<TaskList />', () => {
  it('snapshot: render header and title', () => {
    const wrapper = shallow(
      <TaskList />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('new task onClick handler triggers', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(
      <TaskList onAddTask={mockFn} />
    )

    const button = wrapper.find(`.${styles.newTask}`)
    button.simulate('click')
    expect(mockFn.mock.calls[0]).toEqual([])
  })
})
