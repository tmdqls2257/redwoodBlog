type ContantLayoutProps = {
  children?: React.ReactNode
}

const ContantLayout = ({ children }: ContantLayoutProps) => {
  return <section className="h-screen">{children}</section>
}

export default ContantLayout
