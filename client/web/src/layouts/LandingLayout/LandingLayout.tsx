import { useState } from "react";
import Header from "src/components/Header/Header"
import Navbar from "src/components/Navbar/Navbar";
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
  <div className="flex flex-row">
    {hamState && <Navbar/>}
    {children}
  </div>
  <Footer />
  </>
}

export default LandingLayout
