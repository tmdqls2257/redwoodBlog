import { render } from '@redwoodjs/testing/web'

import PocketCard from './PocketCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PocketCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PocketCard />)
    }).not.toThrow()
  })
})
