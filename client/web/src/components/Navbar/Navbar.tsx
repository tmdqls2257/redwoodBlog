import { Link, routes } from "@redwoodjs/router"
import { useCallback, useState } from "react"
import IconBox, { IconType } from "src/shared/IconBox/IconBox"
import MenuItem from "../MenuItem/MenuItem"
import { navbarData } from "./navbarData"

const Navbar = () => {

  return (
    <nav className="bg-custom-white flex flex-col w-1/4 h-screen ">
      <ul>
        {/* <li >
          <Link className="mr-5" to={routes.home()}>{'Home'}</Link>
        </li>
        <li>
          <Link className="mr-5" to={'/blog/mark_up'}>{'MarkUp'}</Link>
          <Link className="mr-5" to={routes.projects()}>{'Projects'}</Link>
        </li>
        <li>
          <Link className="mr-5" to={'blog/style_sheet'}>{'Style Sheet'}</Link>
          <Link className="mr-5" to={routes.blog()}>{'Blog'}</Link>
        </li>
        <li>
          <Link className="mr-5" to={'blog/language'}>{'Language'}</Link>
        </li> */}
        {navbarData.map((data,idx) => (
          <MenuItem key={idx} path={data.path} title={data.title} content={data.content} />
        ))}
      </ul>
  </nav>
  )
}

export default Navbar
