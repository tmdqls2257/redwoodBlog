import { render } from '@redwoodjs/testing/web'

import IconBox from './IconBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IconBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IconBox />)
    }).not.toThrow()
  })
})
