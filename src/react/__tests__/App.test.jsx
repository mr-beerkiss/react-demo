/* eslint-env jest */
import React from 'react'
import {shallow} from 'enzyme'
import {App} from '../App.jsx'

describe('<App />', () => {
  it('snapshot: renders header and title', () => {
    const wrapper = shallow(
      <App />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('addTaskHandler(): add addTaskAction prop is called', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(
      <App addTaskAction={mockFn} />
    )
    wrapper.instance().addTaskHandler()
    expect(mockFn.mock.calls.length).toBe(1)
  })

  it('taskChangeHandler(): add taskChangeAction prop is called', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(
      <App taskChangeAction={mockFn} />
    )
    wrapper.instance().taskChangeHandler(1, 'x')
    expect(mockFn.mock.calls.length).toBe(1)
    expect(mockFn.mock.calls[0]).toEqual([1, 'x'])
  })

  it('taskCompleteHandler(): add taskCompleteAction prop is called', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(
      <App taskCompleteAction={mockFn} />
    )
    wrapper.instance().taskCompleteHandler(1, 'x')
    expect(mockFn.mock.calls.length).toBe(1)
    expect(mockFn.mock.calls[0]).toEqual([1, 'x'])
  })

  it('taskRemoveHandler(): add taskRemoveAction prop is called', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(
      <App taskRemoveAction={mockFn} />
    )
    wrapper.instance().taskRemoveHandler(1)
    expect(mockFn.mock.calls.length).toBe(1)
    expect(mockFn.mock.calls[0]).toEqual([1])
  })
})
