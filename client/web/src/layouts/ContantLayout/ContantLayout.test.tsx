import { render } from '@redwoodjs/testing/web'

import ContantLayout from './ContantLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ContantLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContantLayout />)
    }).not.toThrow()
  })
})
