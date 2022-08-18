import { MetaTags } from '@redwoodjs/web'

const HtmlPage = () => {
  return (
    <>
      <MetaTags title="Html" description="Html page" />

      <h1>HtmlPage</h1>
      <p>
        Find me in <code>./web/src/pages/HtmlPage/HtmlPage.tsx</code>
      </p>
      <p>
        My default route is named <code>html</code>, link to me with `
        {/* <Link to={routes.html()}>Html</Link>` */}
      </p>
    </>
  )
}

export default HtmlPage
