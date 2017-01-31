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
})
