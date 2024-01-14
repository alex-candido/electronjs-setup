import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import MenuSvg from '../../assets/svg/menu-svg'
import NavbarRoutesData from '../../static/navbar-routes-data'

const DropDown = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props} className="electron-dropdown-component">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <MenuSvg />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {NavbarRoutesData.map((route: NavbarRoutesData) => (
            <li key={route.href}>
              <Link key={route.href} to={route.href}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DropDown
