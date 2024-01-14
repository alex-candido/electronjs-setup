import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import NavbarRoutesData from '../../static/navbar-routes-data'

const Navbar = ({ ...props }: ComponentProps<'nav'>) => {
  return (
    <nav {...props} className="electron-navbar-component">
      <ul className="menu menu-horizontal px-1">
        {NavbarRoutesData.map((route: NavbarRoutesData) => (
          <li key={route.href}>
            <Link key={route.href} to={route.href}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
