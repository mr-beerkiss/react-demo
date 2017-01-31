/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import App from './App.jsx'

describe('<App />', () => {
  it('snapshot: render header and title', () => {
    const tree = renderer.create(
      <App />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
