import { render } from '@redwoodjs/testing/web'

import Animation from './Animation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Animation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Animation />)
    }).not.toThrow()
  })
})
