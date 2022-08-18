import { render } from '@redwoodjs/testing/web'

import HtmlPage from './HtmlPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HtmlPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HtmlPage />)
    }).not.toThrow()
  })
})
