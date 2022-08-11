import { render } from '@redwoodjs/testing/web'

import CustomCard from './CustomCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CustomCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomCard />)
    }).not.toThrow()
  })
})
