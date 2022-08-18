import { Link, routes } from "@redwoodjs/router"
import { useCallback, useState } from "react"
import IconBox, { IconType } from "src/shared/IconBox/IconBox"
import MenuItem from "../MenuItem/MenuItem"
import { NavbarData } from "./NavbarData"

const Navbar = () => {

  return (
    <nav className="bg-custom-white border-custom-violet border flex flex-col w-1/5 min-w-fit h-screen p-5">
      <ul>
        {NavbarData.map((data,idx) => (
          <MenuItem key={idx} path={data.path} title={data.title} content={data.content} />
        ))}
      </ul>
  </nav>
  )
}

export default Navbar
