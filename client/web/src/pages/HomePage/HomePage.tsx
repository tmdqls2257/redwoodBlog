import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Animation from 'src/components/Animation/Animation'
import LandingLayout from 'src/layouts/LandingLayout/LandingLayout'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {/* <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p> */}
      <LandingLayout>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{'안녕하세요 테오구 입니다.'}
            </h1>
            <p className="mb-8 leading-relaxed">{'테오구의 기술 블로그'}</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{'프로젝트 보러가기'}</button>
            </div>
          </div>
          <Animation/>
        </div>
      </section>
      </LandingLayout>
    </>
  )
}

export default HomePage
