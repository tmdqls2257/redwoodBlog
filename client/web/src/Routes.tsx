// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import LandingLayout from './layouts/LandingLayout/LandingLayout'
import { navbarData } from './components/Navbar/navbarData';

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      {/* <Route path="/login" page={LogInPage} name="logIn" /> */}
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/projects" page={ProjectsPage} name="projects" />
      <Set wrap={LandingLayout} >
        {navbarData.map((datas,idx) =>(
          datas.content.map(data => (
            <Route key={idx} path={data.path} page={BlogPage} name="blog" />
          ))
        ))}
        <Route path="/blog" page={BlogPage} name="blog" />
        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
