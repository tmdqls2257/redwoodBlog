import Header from "src/components/Header/Header"
import Footer from '../../components/Footer/Footer';

type LandingLayoutProps = {
  children?: React.ReactNode
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return <>
  <Header/>
  {children}
  <Footer />
  </>
}

export default LandingLayout
