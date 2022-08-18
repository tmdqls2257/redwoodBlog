// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import { NavbarData } from './components/Navbar/NavbarData'
import ContantLayout from './layouts/ContantLayout/ContantLayout'
import LandingLayout from './layouts/LandingLayout/LandingLayout'

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
      <Set wrap={LandingLayout}>
        <Set wrap={ContantLayout}>
          <Route path="/blog/mark_up/html" page={HtmlPage} name="login" />
          <Route path="/blog" page={BlogPage} name="blog" />
          <Route path="/" page={HomePage} name="home" />
        </Set>
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
