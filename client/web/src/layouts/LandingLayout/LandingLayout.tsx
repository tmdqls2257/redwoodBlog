import { useState } from "react";
import Header from "src/components/Header/Header"
import Footer from '../../components/Footer/Footer';

type LandingLayoutProps = {
  children?: React.ReactNode
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  const [hamState, setHamState] = useState(false)

  const onClick = () => {
    setHamState(!hamState)
  }

  return <>
  <Header onClick={onClick}/>
  {children}
  <Footer />
  </>
}

export default LandingLayout
