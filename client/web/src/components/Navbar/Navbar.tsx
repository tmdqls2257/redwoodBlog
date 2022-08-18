import MenuItem from '../MenuItem/MenuItem'

import { NavbarData } from './NavbarData'

const Navbar = () => {
  return (
    <nav className="bg-custom-white border-custom-violet flex h-screen w-1/5 min-w-fit flex-col border p-5">
      <ul>
        {NavbarData.map((data, idx) => (
          <MenuItem
            key={idx}
            path={data.path}
            title={data.title}
            content={data.content}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
